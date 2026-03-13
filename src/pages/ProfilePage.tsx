import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Upload, X, Camera } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { getLS, setLS, LS_KEYS, ProfileData } from "@/utils/localStorage";

const formSchema = z.object({
  age: z.string().min(1, "Age is required"),
  height: z.string().min(1, "Height is required"),
  weight: z.string().min(1, "Weight is required"),
  gender: z.string().min(1, "Gender is required"),
  activityLevel: z.string().min(1, "Activity level is required"),
  healthGoals: z.string().min(1, "Health goals are required"),
  dietaryRestrictions: z.string(),
  allergies: z.string(),
  calorieGoal: z.string().min(1, "Calorie goal is required"),
});

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(() => localStorage.getItem('th_profile_image'));
  const fileInputRef = useRef<HTMLInputElement>(null);

  const savedProfile = getLS<ProfileData>(LS_KEYS.PROFILE, {
    age: '', height: '', weight: '', gender: '', activityLevel: '',
    healthGoals: '', dietaryRestrictions: '', allergies: '', calorieGoal: '2000'
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: savedProfile,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setLS(LS_KEYS.PROFILE, values);
    setIsEditing(false);
    toast.success("Profile updated successfully! ✅");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image must be less than 2MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setProfileImage(result);
      localStorage.setItem('th_profile_image', result);
      toast.success("Profile image updated!");
    };
    reader.readAsDataURL(file);
  };

  const currentUser = JSON.parse(localStorage.getItem('th_current_user') || 'null');

  return (
    <PageLayout activePage="profile">
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-display font-bold text-foreground">Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and health preferences</p>
        </motion.div>

        {/* Profile Image */}
        <Card>
          <CardContent className="p-6 flex items-center gap-6">
            <div className="relative group">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User className="text-primary" size={32} />
                )}
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 rounded-full bg-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <Camera className="text-background" size={20} />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {currentUser?.firstName || 'User'} {currentUser?.lastName || ''}
              </h2>
              <p className="text-muted-foreground text-sm">
                {savedProfile.healthGoals || 'No health goals set yet'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Profile Form */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Health Information</CardTitle>
            <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? 'Cancel' : 'Edit'}
            </Button>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField control={form.control} name="age" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl><Input {...field} disabled={!isEditing} placeholder="25" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="gender" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!isEditing}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="height" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Height (cm)</FormLabel>
                      <FormControl><Input {...field} disabled={!isEditing} placeholder="170" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="weight" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Weight (kg)</FormLabel>
                      <FormControl><Input {...field} disabled={!isEditing} placeholder="70" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="activityLevel" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Activity Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!isEditing}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Select level" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="sedentary">Sedentary</SelectItem>
                          <SelectItem value="light">Lightly Active</SelectItem>
                          <SelectItem value="moderate">Moderately Active</SelectItem>
                          <SelectItem value="very_active">Very Active</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="calorieGoal" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Daily Calorie Goal</FormLabel>
                      <FormControl><Input {...field} disabled={!isEditing} placeholder="2000" type="number" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="healthGoals" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Health Goals</FormLabel>
                    <FormControl><Input {...field} disabled={!isEditing} placeholder="e.g., Weight loss, muscle gain" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="dietaryRestrictions" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dietary Restrictions</FormLabel>
                    <FormControl><Input {...field} disabled={!isEditing} placeholder="e.g., Vegetarian, Gluten-free" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="allergies" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Allergies</FormLabel>
                    <FormControl><Input {...field} disabled={!isEditing} placeholder="e.g., Nuts, Dairy" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                {isEditing && (
                  <Button type="submit" className="w-full">Save Profile</Button>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default ProfilePage;
