import QRCards from "@/components/shared/shared-section/QRCards";
import { defaultQRCardsData } from "@/data/qrCardsData";

export default function QRCard() {
  return <QRCards cards={defaultQRCardsData} />;
}
