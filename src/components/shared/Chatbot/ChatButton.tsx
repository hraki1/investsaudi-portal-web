import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

interface ChatButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ChatButton({ isOpen, onToggle }: ChatButtonProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div
      className={`fixed bottom-4 md:bottom-6 z-50 flex items-center gap-2 md:gap-3 ${
        isRTL ? "left-4 md:left-6" : "right-4 md:right-6"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Chat with us button */}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
            transition={{ duration: 0.3 }}
            onClick={onToggle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg hover:shadow-xl font-medium text-xs md:text-sm items-center gap-2 whitespace-nowrap hidden md:flex"
          >
            <span>{t("chat.button_text", "Chat with us")}</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat icon with notification badge */}
      <motion.button
        onClick={onToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-16 h-16 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center shadow-lg hover:shadow-xl"
      >
        {/* Chat icon */}
        <motion.div
          animate={{ rotate: isOpen ? [0, -10, 10, -10, 0] : 0 }}
          transition={{ duration: 0.5 }}
        >
          <HiOutlineChatBubbleLeftRight className="text-white text-3xl md:text-2xl" />
        </motion.div>

        {/* Notification badge */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-md"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                02
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

