"use client";

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  options: Option[];
}

const SelectField = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder = "선택하세요",
  options,
}: SelectFieldProps<T>) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-md font-semibold text-gray-700">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};

export default SelectField;
