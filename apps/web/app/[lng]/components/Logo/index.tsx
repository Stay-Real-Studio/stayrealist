import { useTranslation } from "../../../i18n";
import { LogoBase } from "./LogoBase";

export const Logo = async ({ lng }) => {
  const { t } = await useTranslation(lng, "client-page");
  return <LogoBase t={t} lng={lng} />;
};
