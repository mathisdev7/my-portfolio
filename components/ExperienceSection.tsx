import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ExperienceSection() {
  const t = useTranslations();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6">{t("hero.experience.title")}</h2>
      <div className="space-y-8">
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
          <div className="absolute left-1.5 top-4 w-0.5 h-full bg-primary/30"></div>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4E0BAQGkSEFJt9Hv6Q/company-logo_200_200/B4EZjNUgM5HgAM-/0/1755791361333/askeal_logo?e=1760572800&v=beta&t=MXF1wCpU2fvGHfasdMaF0tG3juztcdcwuhLcG_GoZIs"
                  alt="Askeal Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded object-contain"
                />
                <h3 className="text-lg font-semibold">
                  {t("hero.experience.askeal.company")}
                </h3>
              </div>
              <p className="text-primary font-medium">
                {t("hero.experience.askeal.position")}
              </p>
            </div>
            <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
              {t("hero.experience.askeal.duration")}
            </span>
          </div>
          <p className="text-secondary">
            {t("hero.experience.askeal.description")}
          </p>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Image
                  src="https://42.fr/wp-content/uploads/2021/08/42.jpg"
                  alt="42 School Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded object-contain"
                />
                <h3 className="text-lg font-semibold">
                  {t("hero.experience.school42.company")}
                </h3>
              </div>
              <p className="text-primary font-medium">
                {t("hero.experience.school42.position")}
              </p>
            </div>
            <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
              {t("hero.experience.school42.duration")}
            </span>
          </div>
          <p className="text-secondary">
            {t("hero.experience.school42.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
