// Shims for packages with missing dist folders in corrupted node_modules

declare module "@radix-ui/react-progress" {
  import * as React from "react";
  
  interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number | null;
    max?: number;
    getValueLabel?(value: number, max: number): string;
    asChild?: boolean;
  }
  
  const Root: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
  const Indicator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean } & React.RefAttributes<HTMLDivElement>>;
  
  export { Root, Indicator };
  export type { ProgressProps };
}

declare module "@radix-ui/react-slot" {
  import * as React from "react";
  const Slot: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
  export { Slot };
}

declare module "@radix-ui/react-tabs" {
  import * as React from "react";
  
  const Root: React.ForwardRefExoticComponent<any>;
  const List: React.ForwardRefExoticComponent<any>;
  const Trigger: React.ForwardRefExoticComponent<any>;
  const Content: React.ForwardRefExoticComponent<any>;
  
  export { Root, List, Trigger, Content };
}

declare module "@radix-ui/react-dialog" {
  import * as React from "react";
  const Root: React.FC<any>;
  const Portal: React.FC<any>;
  const Overlay: React.ForwardRefExoticComponent<any>;
  const Content: React.ForwardRefExoticComponent<any>;
  const Title: React.ForwardRefExoticComponent<any>;
  const Description: React.ForwardRefExoticComponent<any>;
  const Close: React.ForwardRefExoticComponent<any>;
  const Trigger: React.ForwardRefExoticComponent<any>;
  export { Root, Portal, Overlay, Content, Title, Description, Close, Trigger };
}

declare module "@radix-ui/react-label" {
  import * as React from "react";
  const Root: React.ForwardRefExoticComponent<any>;
  export { Root };
}

declare module "@radix-ui/react-select" {
  import * as React from "react";
  const Root: React.FC<any>;
  const Group: React.FC<any>;
  const Value: React.FC<any>;
  const Trigger: React.ForwardRefExoticComponent<any>;
  const Content: React.ForwardRefExoticComponent<any>;
  const Label: React.ForwardRefExoticComponent<any>;
  const Item: React.ForwardRefExoticComponent<any>;
  const ItemIndicator: React.ForwardRefExoticComponent<any>;
  const ItemText: React.ForwardRefExoticComponent<any>;
  const ScrollUpButton: React.ForwardRefExoticComponent<any>;
  const ScrollDownButton: React.ForwardRefExoticComponent<any>;
  const Viewport: React.ForwardRefExoticComponent<any>;
  const Separator: React.ForwardRefExoticComponent<any>;
  const Icon: React.ForwardRefExoticComponent<any>;
  const Portal: React.FC<any>;
  export { Root, Group, Value, Trigger, Content, Label, Item, ItemIndicator, ItemText, ScrollUpButton, ScrollDownButton, Viewport, Separator, Icon, Portal };
}

declare module "@radix-ui/react-popover" {
  import * as React from "react";
  const Root: React.FC<any>;
  const Trigger: React.ForwardRefExoticComponent<any>;
  const Content: React.ForwardRefExoticComponent<any>;
  const Portal: React.FC<any>;
  const Anchor: React.ForwardRefExoticComponent<any>;
  const Close: React.ForwardRefExoticComponent<any>;
  const Arrow: React.ForwardRefExoticComponent<any>;
  export { Root, Trigger, Content, Portal, Anchor, Close, Arrow };
}

declare module "@radix-ui/react-tooltip" {
  import * as React from "react";
  const Provider: React.FC<any>;
  const Root: React.FC<any>;
  const Trigger: React.ForwardRefExoticComponent<any>;
  const Content: React.ForwardRefExoticComponent<any>;
  const Portal: React.FC<any>;
  const Arrow: React.ForwardRefExoticComponent<any>;
  export { Provider, Root, Trigger, Content, Portal, Arrow };
}

declare module "@radix-ui/react-toast" {
  import * as React from "react";
  const Provider: React.FC<any>;
  const Root: React.ForwardRefExoticComponent<any>;
  const Action: React.ForwardRefExoticComponent<any>;
  const Close: React.ForwardRefExoticComponent<any>;
  const Viewport: React.ForwardRefExoticComponent<any>;
  const Title: React.ForwardRefExoticComponent<any>;
  const Description: React.ForwardRefExoticComponent<any>;
  export { Provider, Root, Action, Close, Viewport, Title, Description };
  export type { ToastProps } from "@radix-ui/react-toast";
}

declare module "@radix-ui/react-switch" {
  import * as React from "react";
  const Root: React.ForwardRefExoticComponent<any>;
  const Thumb: React.ForwardRefExoticComponent<any>;
  export { Root, Thumb };
}

declare module "@radix-ui/react-checkbox" {
  import * as React from "react";
  const Root: React.ForwardRefExoticComponent<any>;
  const Indicator: React.ForwardRefExoticComponent<any>;
  export { Root, Indicator };
}

declare module "@radix-ui/react-avatar" {
  import * as React from "react";
  const Root: React.ForwardRefExoticComponent<any>;
  const Image: React.ForwardRefExoticComponent<any>;
  const Fallback: React.ForwardRefExoticComponent<any>;
  export { Root, Image, Fallback };
}

declare module "@radix-ui/react-separator" {
  import * as React from "react";
  const Root: React.ForwardRefExoticComponent<any>;
  export { Root };
}

declare module "@radix-ui/react-scroll-area" {
  import * as React from "react";
  const Root: React.ForwardRefExoticComponent<any>;
  const Viewport: React.ForwardRefExoticComponent<any>;
  const ScrollAreaScrollbar: React.ForwardRefExoticComponent<any>;
  const ScrollAreaThumb: React.ForwardRefExoticComponent<any>;
  const Corner: React.ForwardRefExoticComponent<any>;
  const Scrollbar: React.ForwardRefExoticComponent<any>;
  const Thumb: React.ForwardRefExoticComponent<any>;
  export { Root, Viewport, ScrollAreaScrollbar, ScrollAreaThumb, Corner, Scrollbar, Thumb };
}

declare module "@radix-ui/react-dropdown-menu" {
  import * as React from "react";
  const Root: React.FC<any>;
  const Trigger: React.ForwardRefExoticComponent<any>;
  const Content: React.ForwardRefExoticComponent<any>;
  const Item: React.ForwardRefExoticComponent<any>;
  const CheckboxItem: React.ForwardRefExoticComponent<any>;
  const RadioItem: React.ForwardRefExoticComponent<any>;
  const Label: React.ForwardRefExoticComponent<any>;
  const Separator: React.ForwardRefExoticComponent<any>;
  const Sub: React.FC<any>;
  const SubTrigger: React.ForwardRefExoticComponent<any>;
  const SubContent: React.ForwardRefExoticComponent<any>;
  const Group: React.FC<any>;
  const Portal: React.FC<any>;
  const RadioGroup: React.FC<any>;
  const ItemIndicator: React.ForwardRefExoticComponent<any>;
  export { Root, Trigger, Content, Item, CheckboxItem, RadioItem, Label, Separator, Sub, SubTrigger, SubContent, Group, Portal, RadioGroup, ItemIndicator };
}

declare module "@radix-ui/react-accordion" {
  import * as React from "react";
  const Root: React.ForwardRefExoticComponent<any>;
  const Item: React.ForwardRefExoticComponent<any>;
  const Trigger: React.ForwardRefExoticComponent<any>;
  const Content: React.ForwardRefExoticComponent<any>;
  const Header: React.ForwardRefExoticComponent<any>;
  export { Root, Item, Trigger, Content, Header };
}

declare module "@radix-ui/react-alert-dialog" {
  import * as React from "react";
  const Root: React.FC<any>;
  const Portal: React.FC<any>;
  const Overlay: React.ForwardRefExoticComponent<any>;
  const Content: React.ForwardRefExoticComponent<any>;
  const Title: React.ForwardRefExoticComponent<any>;
  const Description: React.ForwardRefExoticComponent<any>;
  const Cancel: React.ForwardRefExoticComponent<any>;
  const Action: React.ForwardRefExoticComponent<any>;
  const Trigger: React.ForwardRefExoticComponent<any>;
  export { Root, Portal, Overlay, Content, Title, Description, Cancel, Action, Trigger };
}

declare module "@radix-ui/react-radio-group" {
  import * as React from "react";
  const Root: React.ForwardRefExoticComponent<any>;
  const Item: React.ForwardRefExoticComponent<any>;
  const Indicator: React.ForwardRefExoticComponent<any>;
  export { Root, Item, Indicator };
}

declare module "@radix-ui/react-slider" {
  import * as React from "react";
  const Root: React.ForwardRefExoticComponent<any>;
  const Track: React.ForwardRefExoticComponent<any>;
  const Range: React.ForwardRefExoticComponent<any>;
  const Thumb: React.ForwardRefExoticComponent<any>;
  export { Root, Track, Range, Thumb };
}

declare module "@radix-ui/react-collapsible" {
  import * as React from "react";
  const Root: React.ForwardRefExoticComponent<any>;
  const Trigger: React.ForwardRefExoticComponent<any>;
  const Content: React.ForwardRefExoticComponent<any>;
  export { Root, Trigger, Content };
}

declare module "@radix-ui/react-aspect-ratio" {
  import * as React from "react";
  const Root: React.ForwardRefExoticComponent<any>;
  export { Root };
}

declare module "@radix-ui/react-hover-card" {
  import * as React from "react";
  const Root: React.FC<any>;
  const Trigger: React.ForwardRefExoticComponent<any>;
  const Content: React.ForwardRefExoticComponent<any>;
  const Portal: React.FC<any>;
  export { Root, Trigger, Content, Portal };
}

declare module "@radix-ui/react-context-menu" {
  import * as React from "react";
  const Root: React.FC<any>;
  const Trigger: React.ForwardRefExoticComponent<any>;
  const Content: React.ForwardRefExoticComponent<any>;
  const Item: React.ForwardRefExoticComponent<any>;
  const CheckboxItem: React.ForwardRefExoticComponent<any>;
  const RadioItem: React.ForwardRefExoticComponent<any>;
  const Label: React.ForwardRefExoticComponent<any>;
  const Separator: React.ForwardRefExoticComponent<any>;
  const Sub: React.FC<any>;
  const SubTrigger: React.ForwardRefExoticComponent<any>;
  const SubContent: React.ForwardRefExoticComponent<any>;
  const Group: React.FC<any>;
  const Portal: React.FC<any>;
  const RadioGroup: React.FC<any>;
  const ItemIndicator: React.ForwardRefExoticComponent<any>;
  export { Root, Trigger, Content, Item, CheckboxItem, RadioItem, Label, Separator, Sub, SubTrigger, SubContent, Group, Portal, RadioGroup, ItemIndicator };
}

declare module "@radix-ui/react-menubar" {
  import * as React from "react";
  const Root: React.ForwardRefExoticComponent<any>;
  const Menu: React.FC<any>;
  const Trigger: React.ForwardRefExoticComponent<any>;
  const Content: React.ForwardRefExoticComponent<any>;
  const Item: React.ForwardRefExoticComponent<any>;
  const CheckboxItem: React.ForwardRefExoticComponent<any>;
  const RadioItem: React.ForwardRefExoticComponent<any>;
  const Label: React.ForwardRefExoticComponent<any>;
  const Separator: React.ForwardRefExoticComponent<any>;
  const Sub: React.FC<any>;
  const SubTrigger: React.ForwardRefExoticComponent<any>;
  const SubContent: React.ForwardRefExoticComponent<any>;
  const Group: React.FC<any>;
  const Portal: React.FC<any>;
  const RadioGroup: React.FC<any>;
  const ItemIndicator: React.ForwardRefExoticComponent<any>;
  export { Root, Menu, Trigger, Content, Item, CheckboxItem, RadioItem, Label, Separator, Sub, SubTrigger, SubContent, Group, Portal, RadioGroup, ItemIndicator };
}

declare module "@radix-ui/react-navigation-menu" {
  import * as React from "react";
  const Root: React.ForwardRefExoticComponent<any>;
  const List: React.ForwardRefExoticComponent<any>;
  const Item: React.ForwardRefExoticComponent<any>;
  const Trigger: React.ForwardRefExoticComponent<any>;
  const Content: React.ForwardRefExoticComponent<any>;
  const Link: React.ForwardRefExoticComponent<any>;
  const Viewport: React.ForwardRefExoticComponent<any>;
  const Indicator: React.ForwardRefExoticComponent<any>;
  const Sub: React.ForwardRefExoticComponent<any>;
  export { Root, List, Item, Trigger, Content, Link, Viewport, Indicator, Sub };
}

declare module "@radix-ui/react-toggle" {
  import * as React from "react";
  const Root: React.ForwardRefExoticComponent<any>;
  export { Root };
}

declare module "@radix-ui/react-toggle-group" {
  import * as React from "react";
  const Root: React.ForwardRefExoticComponent<any>;
  const Item: React.ForwardRefExoticComponent<any>;
  export { Root, Item };
}

declare module "input-otp" {
  import * as React from "react";
  const OTPInput: React.ForwardRefExoticComponent<any>;
  const OTPInputContext: React.Context<any>;
  const REGEXP_ONLY_DIGITS_AND_CHARS: RegExp;
  const REGEXP_ONLY_DIGITS: RegExp;
  const REGEXP_ONLY_CHARS: RegExp;
  export { OTPInput, OTPInputContext, REGEXP_ONLY_DIGITS_AND_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_CHARS };
  export default OTPInput;
}

declare module "vaul" {
  import * as React from "react";
  const Drawer: {
    Root: React.FC<any>;
    Portal: React.FC<any>;
    Overlay: React.ForwardRefExoticComponent<any>;
    Content: React.ForwardRefExoticComponent<any>;
    Title: React.ForwardRefExoticComponent<any>;
    Description: React.ForwardRefExoticComponent<any>;
    Close: React.ForwardRefExoticComponent<any>;
    Trigger: React.ForwardRefExoticComponent<any>;
    Handle: React.ForwardRefExoticComponent<any>;
    NestedRoot: React.FC<any>;
  };
  export { Drawer };
}

declare module "cmdk" {
  import * as React from "react";
  const Command: React.ForwardRefExoticComponent<any> & {
    Dialog: React.FC<any>;
    Input: React.ForwardRefExoticComponent<any>;
    List: React.ForwardRefExoticComponent<any>;
    Empty: React.ForwardRefExoticComponent<any>;
    Group: React.ForwardRefExoticComponent<any>;
    Item: React.ForwardRefExoticComponent<any>;
    Separator: React.ForwardRefExoticComponent<any>;
    Loading: React.ForwardRefExoticComponent<any>;
  };
  export { Command };
  export default Command;
}

declare module "embla-carousel-react" {
  import * as React from "react";
  type EmblaOptionsType = any;
  type EmblaPluginType = any;
  type EmblaCarouselType = any;
  type UseEmblaCarouselType = [React.RefCallback<HTMLDivElement>, EmblaCarouselType | undefined];
  function useEmblaCarousel(options?: EmblaOptionsType, plugins?: EmblaPluginType[]): UseEmblaCarouselType;
  export default useEmblaCarousel;
  export type { EmblaOptionsType, EmblaPluginType, EmblaCarouselType, UseEmblaCarouselType };
}

declare module "react-day-picker" {
  import * as React from "react";
  export type DayPickerProps = any;
  export function DayPicker(props: any): React.ReactElement;
  export type CaptionProps = any;
  export type RowProps = any;
  export type DayProps = any;
  export type HeadRowProps = any;
  export const ButtonPrimitive: any;
  export type Matcher = any;
  export type DateRange = { from?: Date; to?: Date };
  export type SelectSingleEventHandler = any;
  export type SelectRangeEventHandler = any;
}

declare module "react-resizable-panels" {
  import * as React from "react";
  const PanelGroup: React.ForwardRefExoticComponent<any>;
  const Panel: React.ForwardRefExoticComponent<any>;
  const PanelResizeHandle: React.ForwardRefExoticComponent<any>;
  export { PanelGroup, Panel, PanelResizeHandle };
}

declare module "next-themes" {
  export function useTheme(): { theme?: string; setTheme: (theme: string) => void; resolvedTheme?: string; themes: string[] };
  export const ThemeProvider: React.FC<any>;
}

declare module "@hookform/resolvers/zod" {
  export function zodResolver(schema: any): any;
}

declare module "react-responsive" {
  export function useMediaQuery(query: any): boolean;
}

declare module "react-feather" {
  import * as React from "react";
  export const Activity: React.FC<any>;
  export const AlertCircle: React.FC<any>;
  // Add more as needed
}

declare module "canvas-confetti" {
  function confetti(options?: any): Promise<null>;
  export default confetti;
}

declare module "uuid" {
  export function v4(): string;
}

declare module "react-i18next" {
  export function useTranslation(): { t: (key: string) => string; i18n: any };
  export function initReactI18next(): any;
}
