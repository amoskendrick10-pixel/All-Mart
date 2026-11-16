"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";

const AuthForm = ({
  title,
  description,
  fields = [],
  onSubmit,
  error,
  buttonText = "Submit",
  children,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full space-y-5"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-sm text-gray-500">
            {description}
          </p>
        )}
      </div>

      {error && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      {fields.map((field) => (
        <Input
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type || "text"}
          placeholder={field.placeholder}
          value={field.value}
          onChange={field.onChange}
          required={field.required ?? true}
        />
      ))}

      {children}

      <Button type="submit" className="w-full">
        {buttonText}
      </Button>
    </form>
  );
};

export default AuthForm;