"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import PaymentModal from "./PaymentModal";

interface EvaluationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  mobileNumber: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
}

const EvaluationForm: React.FC<EvaluationFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobileNumber: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.mobileNumber.trim())
      newErrors.mobileNumber = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\D/g, "")))
      newErrors.mobileNumber = "Mobile number must be 10 digits";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.height.trim()) newErrors.height = "Height is required";
    if (!formData.weight.trim()) newErrors.weight = "Weight is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleNext = () => {
    if (validateForm()) {
      setCurrentStep(2);
      setIsPaymentOpen(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      age: "",
      gender: "",
      height: "",
      weight: "",
    });
    setErrors({});
    setCurrentStep(1);
    onClose();
  };

  return (
    <>
      <Dialog open={isOpen && currentStep === 1} onOpenChange={handleReset}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Secure Your Free Evaluation</DialogTitle>
            <DialogDescription>
              Fill in your details to get started with your personalized
              transformation program
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <Label htmlFor="mobileNumber" className="text-sm font-medium">
                Mobile Number *
              </Label>
              <Input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                placeholder="Enter your 10-digit mobile number"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className={errors.mobileNumber ? "border-red-500" : ""}
              />
              {errors.mobileNumber && (
                <p className="text-xs text-red-500">{errors.mobileNumber}</p>
              )}
            </div>

            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-medium">
                Age *
              </Label>
              <Input
                id="age"
                name="age"
                type="number"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleInputChange}
                className={errors.age ? "border-red-500" : ""}
              />
              {errors.age && (
                <p className="text-xs text-red-500">{errors.age}</p>
              )}
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label htmlFor="gender" className="text-sm font-medium">
                Gender *
              </Label>
              <Select
                value={formData.gender}
                onValueChange={(value) => handleSelectChange(value, "gender")}
              >
                <SelectTrigger
                  id="gender"
                  className={errors.gender ? "border-red-500" : ""}
                >
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && (
                <p className="text-xs text-red-500">{errors.gender}</p>
              )}
            </div>

            {/* Height */}
            <div className="space-y-2">
              <Label htmlFor="height" className="text-sm font-medium">
                Height (cm) *
              </Label>
              <Input
                id="height"
                name="height"
                type="text"
                placeholder="Enter your height in cm"
                value={formData.height}
                onChange={handleInputChange}
                className={errors.height ? "border-red-500" : ""}
              />
              {errors.height && (
                <p className="text-xs text-red-500">{errors.height}</p>
              )}
            </div>

            {/* Weight */}
            <div className="space-y-2">
              <Label htmlFor="weight" className="text-sm font-medium">
                Weight (kg) *
              </Label>
              <Input
                id="weight"
                name="weight"
                type="text"
                placeholder="Enter your weight in kg"
                value={formData.weight}
                onChange={handleInputChange}
                className={errors.weight ? "border-red-500" : ""}
              />
              {errors.weight && (
                <p className="text-xs text-red-500">{errors.weight}</p>
              )}
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button
              variant="outline"
              onClick={handleReset}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button onClick={handleNext} className="flex-1 bg-primary">
              Next
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {isPaymentOpen && currentStep === 2 && (
        <PaymentModal
          isOpen={isPaymentOpen}
          onClose={() => {
            setCurrentStep(1);
            setIsPaymentOpen(false);
            handleReset();
          }}
          formData={formData}
        />
      )}
    </>
  );
};

export default EvaluationForm;
