import {
  ReactNode,
  ElementType,
  ComponentPropsWithoutRef,
} from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "body-sm"
  | "body-lg"
  | "highlight"
  | "button";

type TypographyProps<T extends ElementType = "p"> = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  color?: string;
  weight?: string;
  as?: T;
} & ComponentPropsWithoutRef<T>; // ✅ makes Tag callable

const variantClasses: Record<Variant, string> = {
  h1: "heading-1",
  h2: "heading-2",
  h3: "heading-3",
  h4: "subheading",
  body: "body-text",
  "body-sm": "body-text-sm",
  "body-lg": "body-text-lg",
  highlight: "highlight",
  button: "button-text",
};

export function Typography<T extends ElementType = "p">({
  variant = "body",
  children,
  className = "",
  color,
  weight,
  as,
  ...props
}: TypographyProps<T>) {
  const Tag = (as || (variant.startsWith("h") ? variant : "p")) as ElementType;

  const style = {
    ...(color && { color }),
    ...(weight && { fontWeight: weight }),
  };

  return (
    <Tag
      className={`${variantClasses[variant]} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  );
}


// Convenience components
export const H1 = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="h1" {...props} />;

export const H2 = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="h2" {...props} />;

export const H3 = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="h3" {...props} />;

export const H4 = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="h4" {...props} />;

export const BodyText = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="body" {...props} />;

export const Highlight = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="highlight" {...props} />;

export const ButtonText = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="button" {...props} />;