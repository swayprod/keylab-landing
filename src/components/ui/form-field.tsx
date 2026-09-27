import { cn } from "@/lib/cn";

interface FormFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
}

export function FormField({ id, label, value, onChange, placeholder, autoComplete, error }: FormFieldProps) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        id={id}
        name={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "mt-2 block min-h-13 w-full rounded-2xl border bg-transparent px-5 text-base text-fg transition-[border-color,box-shadow] duration-300 placeholder:text-muted/70 focus:border-primary focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-primary)_25%,transparent)] focus:outline-none",
          error ? "border-danger" : "border-line",
        )}
      />
      {error && (
        <p id={errorId} className="mt-2 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
