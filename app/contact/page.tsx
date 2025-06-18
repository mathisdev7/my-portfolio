"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconSend } from "@tabler/icons-react";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { submitContactForm } from "./actions";

export default function ContactPage() {
  const t = useTranslations();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const result = await submitContactForm(formData);

      if (result.success) {
        toast.success(t("contact.successMessage"));
        formRef.current?.reset();
      } else {
        toast.error(result.error || t("contact.errorMessage"));
      }
    } catch (error) {
      toast.error(t("contact.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl antialiased">
      <div className="mx-4 px-2 md:px-0 lg:mx-auto py-5">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{t("contact.title")}</h1>
          <p className="text-muted-foreground">{t("contact.description")}</p>
        </div>

        <div className="max-w-2xl">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.firstName")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder={t("contact.firstNamePlaceholder")}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.lastName")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder={t("contact.lastNamePlaceholder")}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t("contact.email")} <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t("contact.emailPlaceholder")}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="linkedin"
                className="block text-sm font-medium mb-2"
              >
                {t("contact.linkedin")}
              </label>
              <Input
                id="linkedin"
                name="linkedin"
                type="text"
                placeholder={t("contact.linkedinPlaceholder")}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                {t("contact.message")} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder={t("contact.messagePlaceholder")}
                disabled={isSubmitting}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("contact.sending")}
                </>
              ) : (
                <>
                  <IconSend size={16} className="mr-2" />
                  {t("contact.submit")}
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
