import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, Utensils, Activity, Award, Flame, Sparkles,
  CheckCircle2, Target, Heart, TrendingUp, Calendar, Zap,
  Leaf, BarChart, ChevronDown
} from "lucide-react";

const FEATURES = [
  { icon: Calendar, title: "Weekly Meal Planning", desc: "Design balanced meal plans for the entire week with smart suggestions" },
  { icon: BarChart, title: "Nutrition Tracking", desc: "Monitor macros, calories, and nutrients with beautiful charts" },
  { icon: Target, title: "Goal Setting", desc: "Set personalized health goals and track progress toward them" },
  { icon: Award, title: "Gamification", desc: "Earn points, badges, and streaks for maintaining healthy habits" },
  { icon: Heart, title: "Favorites & Discovery", desc: "Save your favorite meals and discover new healthy recipes" },
  { icon: Activity, title: "Health Insights", desc: "Track sleep, exercise, hydration, and mood patterns" },
];

const BENEFITS = [
  "Personalized meal recommendations",
  "Detailed nutrition breakdowns",
  "Progress tracking & analytics",
  "Gamified health challenges",
  "Daily journal & mood tracking",
  "Cooking video tutorials",
];

const WelcomePage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const featuresRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    if (firstName.trim()) {
      localStorage.setItem('th_current_user', JSON.stringify({ firstName, lastName }));
      navigate('/dashboard');
    } else {
      setShowLogin(true);
    }
  };

  const handleQuickStart = () => {
    localStorage.setItem('th_current_user', JSON.stringify({ firstName: 'Guest', lastName: '' }));
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-8 flex justify-center"
          >
            <Logo size="lg" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight mb-6">
            Your Journey to{" "}
            <span className="text-primary">Healthier Eating</span>{" "}
            Starts Here
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Plan meals, track nutrition, earn rewards, and build lasting healthy habits 
            with TasteHealth's intelligent wellness platform.
          </p>

          <AnimatePresence mode="wait">
            {!showLogin ? (
              <motion.div
                key="buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button size="lg" onClick={() => setShowLogin(true)} className="gap-2 px-8">
                  Get Started <ArrowRight size={18} />
                </Button>
                <Button size="lg" variant="outline" onClick={handleQuickStart} className="gap-2">
                  <Zap size={18} /> Quick Start as Guest
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="login"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <Card className="max-w-md mx-auto">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Welcome! What's your name?</h3>
                    <Input
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Input
                      placeholder="Last Name (optional)"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <Button className="w-full gap-2" onClick={handleGetStarted} disabled={!firstName.trim()}>
                      Continue <ArrowRight size={16} />
                    </Button>
                    <Button variant="ghost" className="w-full" onClick={() => setShowLogin(false)}>
                      Back
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <button
              onClick={() => featuresRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors animate-bounce-slow"
            >
              <ChevronDown size={32} />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Everything You Need for <span className="text-primary">Healthier Living</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            TasteHealth combines meal planning, nutrition tracking, and gamification into one powerful platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container bg-primary/5 rounded-3xl my-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Why Choose TasteHealth?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 bg-card rounded-lg p-4"
            >
              <CheckCircle2 className="text-primary shrink-0" size={20} />
              <span className="text-foreground text-sm font-medium">{benefit}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" onClick={() => setShowLogin(true)} className="gap-2">
            <Sparkles size={18} /> Start Your Wellness Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-container text-center border-t border-border mt-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Logo size="sm" />
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} TasteHealth. Empowering healthier lifestyles.
        </p>
      </footer>
    </div>
  );
};

export default WelcomePage;
