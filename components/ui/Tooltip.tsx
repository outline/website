"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={`tooltip ${className}`}
      {...props}
    />
    <style global jsx>{`
      .tooltip {
        z-index: 50;
        overflow: hidden;
        border-radius: 0.375rem;
        border: 1px solid;
        background: #000;
        padding: 8px;
        font-size: 15px;
        font-weight: normal;
        color: #fff;
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
        animation: 0.2s fade-in-0, 0.2s zoom-in-95;
      }

      .tooltop[data-state="closed"] {
        animation: 0.2s fade-out-0, 0.2s zoom-out-95;
      }

      @keyframes fade-in-0 {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fade-out-0 {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      @keyframes zoom-in-95 {
        from {
          transform: scale(0.95);
        }
        to {
          transform: scale(1);
        }
      }

      @keyframes zoom-out-95 {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(0.95);
        }
      }
    `}</style>
  </>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const SimpleTooltip = ({ className, children, content }) => {
  return (
    <Tooltip>
      <TooltipTrigger className={className}>{children}</TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </Tooltip>
  );
};

export {
  SimpleTooltip,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
};
