"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { FormDataState } from "./EnquireFormCard";
import { X } from "lucide-react";

const AnimatedSuccessCheckmark = () => (
  <div className="w-20 h-20 mx-auto flex items-center justify-center bg-[#526E07]/10 rounded-full border border-[#526E07]/30">
    <svg
      className="w-12 h-12 text-[#526E07]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        className="animate-[drawCheck_0.6s_ease-in-out_forwards]"
        strokeDasharray="30"
        strokeDashoffset="30"
        d="M5 13l4 4L19 7"
      />
    </svg>
    <style jsx>{`
      @keyframes drawCheck {
        to {
          stroke-dashoffset: 0;
        }
      }
    `}</style>
  </div>
);

interface EnquireSuccessModalProps {
  formData: FormDataState;
  onClose: () => void;
}

export default function EnquireSuccessModal({
  formData,
  onClose,
}: EnquireSuccessModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-lg p-8 space-y-6 text-center relative text-black shadow-2xl border border-zinc-200">
        {/* Top Right Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-black hover:bg-zinc-100 rounded-full transition-colors focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Animated SVG Tick */}
        <AnimatedSuccessCheckmark />

        <div className="space-y-2">
          <h3 className="text-2xl font-extrabold text-black tracking-tight">
            Request Successfully Submitted!
          </h3>
          <p className="text-sm text-zinc-600 font-medium leading-relaxed">
            Thank you <span className="text-black font-extrabold">{formData.fullName}</span>. Our technical engineering team has received your enquiry for <span className="text-[#526E07] font-bold">{formData.serviceType}</span>.
          </p>
        </div>

        {/* Filled Form Details Summary */}
        <div className="bg-[#f8f9fa] rounded-xl p-4 border border-zinc-200 text-left space-y-2 text-xs sm:text-sm">
          <div className="font-bold text-black border-b border-zinc-200 pb-2 uppercase tracking-wider">
            Submission Summary
          </div>
          <div className="grid grid-cols-2 gap-2 text-zinc-800 font-medium">
            <div><span className="font-bold text-black">Contact:</span> {formData.contactInfo}</div>
            <div><span className="font-bold text-black">Company:</span> {formData.companyName || "N/A"}</div>
            <div><span className="font-bold text-black">Batch:</span> {formData.quantity}</div>
            <div><span className="font-bold text-black">Product:</span> {formData.serviceType}</div>
          </div>
          {formData.message && (
            <div className="pt-1 text-zinc-700">
              <span className="font-bold text-black">Notes:</span> &ldquo;{formData.message}&rdquo;
            </div>
          )}
        </div>

        <Button
          onClick={onClose}
          variant="primary"
          size="md"
          fullWidth
        >
          Back to Product Specifications
        </Button>
      </div>
    </div>
  );
}
