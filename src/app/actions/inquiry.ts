"use server";

import { sendInquiryEmail } from "@/lib/brevo";

export type InquiryState = {
  ok: boolean;
  message: string;
  values?: {
    name: string;
    contact: string;
    need: string;
    message: string;
  };
  errors?: {
    name?: string;
    contact?: string;
    need?: string;
    message?: string;
  };
};

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const name = String(formData.get("name") ?? "").trim();
  const contact = String(formData.get("contact") ?? "").trim();
  const need = String(formData.get("need") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const values = { name, contact, need, message };
  const errors: InquiryState["errors"] = {};

  if (name.length < 2) errors.name = "Please enter your name.";
  if (contact.length < 3) errors.contact = "Please enter an email or phone.";
  if (!need) errors.need = "Please choose what you need.";
  if (message.length < 3) {
    errors.message = "Please add a short note about your project.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      message: "Please fill the highlighted fields.",
      values,
      errors,
    };
  }

  try {
    await sendInquiryEmail({ name, contact, need, message });
  } catch (error) {
    console.error("[Enquiry email failed]", error);
    return {
      ok: false,
      values,
      message:
        "We could not send your enquiry right now. Please email webproductcreator@gmail.com directly.",
    };
  }

  return {
    ok: true,
    message: "Thanks! We received your enquiry and will get back to you soon.",
    values: { name: "", contact: "", need: "Both", message: "" },
  };
}
