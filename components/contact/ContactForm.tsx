"use client";

import { useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { useForm } from "react-hook-form";

type FormData = {
  website: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  postcode: string;
  service: string;
  description: string;
  existingCustomer: string;
};

const services = [
  "CCTV Installation",
  "TV Wall Mounting",
  "Electrical Services",
  "Plumbing Services",
  "Home Networking",
  "Smart Home Installation",
  "White Goods Installation",
  "Painting & Decorating",
  "Property Maintenance",
  "Other",
];

export default function ContactForm() {
  const {
  register,
  handleSubmit,
  watch,
  reset,
  formState: { errors },
} = useForm<FormData>();

  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

const [success, setSuccess] = useState("");

const [error, setError] = useState("");

const [reference, setReference] = useState("");
const [turnstileToken, setTurnstileToken] = useState("");
const turnstileRef = useRef<any>(null);
  const description = watch("description") || "";

  const onSubmit = async (data: FormData) => {

  setLoading(true);

  setError("");

  setSuccess("");

  setReference("");
  if (!turnstileToken) {
  setLoading(false);
  setError("Please complete the security verification.");
  return;
}

  try {

    const formData = new FormData();

    formData.append("name", data.name);

    formData.append("email", data.email);

    formData.append("phone", data.phone);

    formData.append("address", data.address);

    formData.append("postcode", data.postcode);

    formData.append("service", data.service);

    formData.append("description", data.description);

    formData.append(
      "existingCustomer",
      data.existingCustomer || "No"
    );

    formData.append("privacy", "true");

formData.append("turnstileToken", turnstileToken);

formData.append("website", data.website || "");

files.forEach((file) => {
  formData.append("photos", file);
});
        const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.error || "Failed to submit your request."
      );
    }

setSuccess(result.message);

setReference(result.reference);

reset({
  name: "",
  email: "",
  phone: "",
  address: "",
  postcode: "",
  service: "",
  description: "",
  existingCustomer: "No",
  website: "",
});

setFiles([]);

setTurnstileToken("");

turnstileRef.current?.reset();

  } catch (err) {

    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Unexpected error.");
    }

  } finally {

    setLoading(false);

  }

};

  const handleFiles = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) return;

    const selected = Array.from(event.target.files);

    if (selected.length > 5) {
      alert("Maximum 5 photos allowed.");
      return;
    }

    setFiles(selected);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    
      className="rounded-2xl border border-yellow-500/20 bg-black p-8 space-y-8"
    >
      <div>

        <h2 className="text-4xl font-black text-white">
          Get My Free Quote
        </h2>

        <p className="mt-3 text-gray-400">
          Complete the form below and we'll contact you as soon as possible.
        </p>

      </div>

      {/* Name */}

      <div>

        <label className="mb-2 block font-semibold text-white">
          Name *
        </label>

        <input
          {...register("name", {
            required: "Please enter your name",
          })}
          placeholder="Your Name"
          className="w-full rounded-xl border border-gray-700 bg-[#111] px-5 py-4 text-white outline-none focus:border-yellow-400"
        />

        {errors.name && (
          <p className="mt-2 text-red-400">
            {errors.name.message}
          </p>
        )}

      </div>

      {/* Email */}

      <div>

        <label className="mb-2 block font-semibold text-white">
          Email *
        </label>

        <input
          type="email"
          {...register("email", {
            required: "Email is required",
          })}
          placeholder="example@email.com"
          className="w-full rounded-xl border border-gray-700 bg-[#111] px-5 py-4 text-white outline-none focus:border-yellow-400"
        />

        {errors.email && (
          <p className="mt-2 text-red-400">
            {errors.email.message}
          </p>
        )}

      </div>

      {/* Phone */}

      <div>

        <label className="mb-2 block font-semibold text-white">
          Phone Number *
        </label>

        <input
          type="tel"
          {...register("phone", {
            required: "Phone number is required",
          })}
          placeholder="+44..."
          className="w-full rounded-xl border border-gray-700 bg-[#111] px-5 py-4 text-white outline-none focus:border-yellow-400"
        />

        {errors.phone && (
          <p className="mt-2 text-red-400">
            {errors.phone.message}
          </p>
        )}

      </div>

      {/* Address */}

      <div>

        <label className="mb-2 block font-semibold text-white">
          Address
        </label>

        <input
          {...register("address")}
          placeholder="Optional"
          className="w-full rounded-xl border border-gray-700 bg-[#111] px-5 py-4 text-white outline-none focus:border-yellow-400"
        />

      </div>

      {/* Postcode */}

      <div>

        <label className="mb-2 block font-semibold text-white">
          Postcode *
        </label>

        <input
          {...register("postcode", {
            required: "Postcode is required",
          })}
          placeholder="BN..."
          className="w-full rounded-xl border border-gray-700 bg-[#111] px-5 py-4 text-white outline-none focus:border-yellow-400"
        />

        {errors.postcode && (
          <p className="mt-2 text-red-400">
            {errors.postcode.message}
          </p>
        )}

      </div>

      {/* Service */}

      <div>

        <label className="mb-2 block font-semibold text-white">
          Service Required *
        </label>

        <select
          {...register("service", {
            required: "Please select a service",
          })}
          className="w-full rounded-xl border border-gray-700 bg-[#111] px-5 py-4 text-white outline-none focus:border-yellow-400"
        >
          <option value="">
            Select a service
          </option>

          {services.map((service) => (
            <option
              key={service}
              value={service}
            >
              {service}
            </option>
          ))}
        </select>

        {errors.service && (
          <p className="mt-2 text-red-400">
            {errors.service.message}
          </p>
        )}

      </div>
            {/* Project Description */}

      <div>

        <label className="mb-2 block font-semibold text-white">
          Tell us about your project *
        </label>

        <textarea
          rows={8}
          maxLength={5000}
          {...register("description", {
            required: "Please describe your project",
            maxLength: 5000,
          })}
          placeholder="Describe the work you need. Include as much detail as possible."
          className="w-full rounded-xl border border-gray-700 bg-[#111] px-5 py-4 text-white outline-none resize-none focus:border-yellow-400"
        />

        <div className="mt-2 flex justify-between">

          {errors.description ? (
            <p className="text-red-400">
              {errors.description.message}
            </p>
          ) : (
            <span />
          )}

          <p className="text-sm text-gray-500">
            {description.length} / 5000
          </p>

        </div>

      </div>

      {/* Upload Photos */}

      <div>

        <label className="mb-2 block font-semibold text-white">
          Upload Photos
        </label>

        <input
          type="file"
          multiple
          accept=".jpg,.jpeg,.png,.webp,.heic"
          onChange={handleFiles}
          className="block w-full text-gray-300
          file:mr-4
          file:rounded-lg
          file:border-0
          file:bg-yellow-400
          file:px-5
          file:py-3
          file:font-semibold
          file:text-black
          hover:file:bg-yellow-300"
        />

        <p className="mt-3 text-sm text-gray-500">
          Upload up to 5 photos (JPG, PNG, WEBP or HEIC).
        </p>

        {files.length > 0 && (

          <div className="mt-5 rounded-xl bg-[#111] p-4">

            <p className="mb-3 font-semibold text-white">
              Selected files
            </p>

            <ul className="space-y-2">

              {files.map((file) => (

                <li
                  key={file.name}
                  className="text-sm text-gray-400"
                >
                  📷 {file.name}
                </li>

              ))}

            </ul>

          </div>

        )}

      </div>

      {/* Existing Customer */}

      <div>

        <label className="mb-3 block font-semibold text-white">
          Are you an existing customer?
        </label>

        <div className="flex gap-8">

          <label className="flex items-center gap-2 text-white">

            <input
              type="radio"
              value="Yes"
              {...register("existingCustomer")}
            />

            Yes

          </label>

          <label className="flex items-center gap-2 text-white">

            <input
              type="radio"
              value="No"
              {...register("existingCustomer")}
            />

            No

          </label>

        </div>

      </div>

      {/* Privacy */}

      <div>

        <label className="flex items-start gap-3 text-gray-300">

          <input
            type="checkbox"
            required
            className="mt-1"
          />

          <span>
            I have read and agree to the Privacy Policy.
          </span>

        </label>

      </div>

      {/* Cloudflare Turnstile */}

<div className="flex justify-center">

  <Turnstile
  ref={turnstileRef}
    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
    onSuccess={(token) => {
      setTurnstileToken(token);
    }}
    onExpire={() => {
      setTurnstileToken("");
    }}
    onError={() => {
      setTurnstileToken("");
    }}
    options={{
      theme: "dark",
      size: "normal",
    }}
  />

</div>
{error && (
  <div className="rounded-xl border border-red-500 bg-red-500/10 p-4 text-red-300">
    {error}
  </div>
)}

{success && (
  <div className="rounded-xl border border-green-500 bg-green-500/10 p-4">

    <p className="font-bold text-green-400">
      {success}
    </p>

    <p className="mt-2 text-green-300">
      Reference Number:
      <span className="ml-2 font-bold">
        {reference}
      </span>
    </p>

  </div>
)}
      {/* Submit */}

      <button
  type="submit"
  disabled={loading}
  className="w-full rounded-xl bg-yellow-400 py-5 text-xl font-bold text-black transition hover:bg-yellow-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
>
  {loading ? "Sending..." : "Get My Free Quote"}
</button>
<input
  type="text"
  autoComplete="off"
  tabIndex={-1}
  className="hidden"
  {...register("website")}
/>
    </form>
    
  );
}