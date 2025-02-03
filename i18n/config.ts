"use client"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import type { Translations } from "./type"

export const defaultNS = "common"
export const fallbackLng = "en"

const resources: Record<string, { common: Translations["common"] }> = {
  en: {
    common: {
      errors: {
        somethingWrong: "Something went wrong",
        tryAgain: "Try again",
        notFound: "Page Not Found",
        description:
          "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
        backToHome: "Back to Home",
      },

      greeting: "Hey 👋,",
      intro: "I'm Quang Pham!",
      description:
        `Knowledgeable Software Engineer with over 9 years of experience in cutting-edge web technology development,
         Experienced in optimizing the performance, user interface(UI), and user experience(UX) for web and mobile platforms.
         `,
      position: "Senior Software Engineer at",
      viewResume: "View Resume",
      connect: {
        linkedin: "Connect on LinkedIn",
        twitter: "Follow me on Twitter",
        github: "Check out my GitHub",
      },
      social: {
        linkedin: {
          title: "Connect on LinkedIn",
          label: "Visit Quang Pham's LinkedIn profile",
        },
        twitter: {
          title: "Follow me on Twitter",
          label: "Follow Quang Pham on Twitter",
        },
        github: {
          title: "Check out my GitHub",
          label: "View Quang Pham's GitHub profile",
        },
      },
    },
  },
  vi: {
    common: {
      errors: {
        somethingWrong: "Đã xảy ra lỗi",
        tryAgain: "Thử lại",
        notFound: "Trang không tìm thấy",
        description:
          "Trang bản bạn truy cập đã bị xóa, được đổi tên hoặc không tìm thấy.",
        backToHome: "Quay lại trang chủ",
      },
      greeting: "Xin chào 👋,",
      intro: "Tôi là Quang Phạm!",
      description:
        `Kỹ sư phần mềm giàu kiến thức với hơn 9 năm kinh nghiệm trong phát triển công nghệ web tiên tiến
        Có kinh nghiệm trong việc tối ưu hóa hiệu suất, giao diện người dùng (UI) và trải nghiệm người dùng (UX) cho các nền tảng web và di động.
         `,
      position: "Kỹ sư phần mềm cao cấp tại",
      viewResume: "Xem CV",
      connect: {
        linkedin: "Kết nối trên LinkedIn",
        twitter: "Theo dõi trên Twitter",
        github: "Xem GitHub của tôi",
      },
      social: {
        linkedin: {
          title: "Kết nối qua LinkedIn",
          label: "Ghé thăm hồ sơ LinkedIn của Quang Phạm",
        },
        twitter: {
          title: "Theo dõi tôi trên Twitter",
          label: "Theo dõi Quang Phạm trên Twitter",
        },
        github: {
          title: "Xem GitHub của tôi",
          label: "Xem hồ sơ GitHub của Quang Phạm",
        },
      },
    },
  },
  ja: {
    common: {
      errors: {
        somethingWrong: "何らかの問題が発生しました",
        tryAgain: "もう一度試してください",
        notFound: "ページが見つかりません",
        description:
          "あなたが見つけたページは削除され、名前が変更され、または現在利用できない状態でした可能性があります。",
        backToHome: "戻る",
      },
      greeting: "こんにちは 👋,",
      intro: "クアン・ファムです!",
      description:
        `
        最先端のWeb技術開発において9年以上の経験を持つ、豊富な知識を備えたソフトウェアエンジニア。
        Webおよびモバイルプラットフォーム向けのパフォーマンス、ユーザーインターフェース（UI）、ユーザーエクスペリエンス（UX）の最適化に豊富な経験を持つ。
        `,
      position: "シニアソフトウェアエンジニア @",
      viewResume: "履歴書を見る",
      connect: {
        linkedin: "LinkedInでつながる",
        twitter: "Twitterでフォロー",
        github: "GitHubをチェック",
      },
      social: {
        linkedin: {
          title: "LinkedInでつながる",
          label: "クアン・ファムのLinkedInプロフィールを見る",
        },
        twitter: {
          title: "Twitterでフォロー",
          label: "クアン・ファムをTwitterでフォロー",
        },
        github: {
          title: "GitHubをチェック",
          label: "クアン・ファムのGitHubプロフィールを見る",
        },
      },
    },
  },
}

// Initialize i18next only if it hasn't been initialized yet
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    defaultNS: "common",
    fallbackLng: "en",
    lng: "en", // Force default language to English
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })
}

export default i18n
