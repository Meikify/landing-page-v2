import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat?: string;
  color?: string;
  className?: string;
  isVisible?: boolean;
  staggerIndex?: number;
  children?: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  stat,
  color = "from-cyan-500 to-blue-600",
  className = "",
  isVisible = false,
  staggerIndex = 1,
  children,
}) => {
  return (
    <Card
      className={cn(
        "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group",
        isVisible ? `animate-fade-in-up animate-stagger-${staggerIndex}` : "",
        className
      )}
    >
      <CardContent className="p-6 text-center">
        <div
          className={cn(
            "inline-flex p-3 rounded-2xl bg-gradient-to-br mb-4 group-hover:scale-110 transition-transform duration-300",
            color
          )}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-300">{title}</h3>
        <p className="text-slate-300 mb-4 leading-relaxed text-sm">{description}</p>
        {stat && (
          <div
            className={cn(
              "text-lg font-bold bg-gradient-to-br bg-clip-text text-transparent",
              color
            )}
          >
            {stat}
          </div>
        )}
        {children}
      </CardContent>
    </Card>
  );
};

interface BeforeAfterItemProps {
  icon: string;
  text: string;
  subtext: string;
  className?: string;
}

export const BeforeAfterItem: React.FC<BeforeAfterItemProps> = ({
  icon,
  text,
  subtext,
  className = "",
}) => {
  return (
    <div className={cn("flex items-start space-x-4 group", className)}>
      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
        <span role="img" aria-label={text}>
          {icon}
        </span>
      </div>
      <div className="flex-1">
        <p className="text-slate-800 font-semibold text-lg leading-tight">{text}</p>
        <p className="text-slate-600 mt-1">{subtext}</p>
      </div>
    </div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      <p className="text-slate-700 mb-4">&ldquo;{quote}&rdquo;</p>
      <p className="text-slate-900 font-bold text-right">— {author}</p>
    </div>
  );
};