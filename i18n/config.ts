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
        description: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
      },

      greeting: "Hey 👋,",
      intro: "I'm Quang Pham!",
      description: "Passionate about coding and delivering high-quality, scalable products that meet business needs and exceed user expectations.",
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
          label: "Visit Quang Pham's LinkedIn profile"
        },
        twitter: {
          title: "Follow me on Twitter",
          label: "Follow Quang Pham on Twitter"
        },
        github: {
          title: "Check out my GitHub",
          label: "View Quang Pham's GitHub profile"
        }
      }
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
      },
      greeting: "Xin chào 👋,",
      intro: "Tôi là Quang Phạm!",
      description:
        "Đam mê lập trình và tạo ra các sản phẩm chất lượng cao, có khả năng mở rộng đáp ứng nhu cầu nghiệp vụ và đáp ứng mong đợi của người dùng.",
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
          label: "Ghé thăm hồ sơ LinkedIn của Quang Phạm"
        },
        twitter: {
          title: "Theo dõi tôi trên Twitter",
          label: "Theo dõi Quang Phạm trên Twitter"
        },
        github: {
          title: "Xem GitHub của tôi",
          label: "Xem hồ sơ GitHub của Quang Phạm"
        }
      }
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
      },
      greeting: "こんにちは 👋,",
      intro: "クアン・ファムです!",
      description:
        "高品質でスケーラブルな製品の開発に情熱を持ち、ビジネスニーズを満たし、ユーザーの期待を超えることを目指しています。",
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
          label: "クアン・ファムのLinkedInプロフィールを見る"
        },
        twitter: {
          title: "Twitterでフォロー",
          label: "クアン・ファムをTwitterでフォロー"
        },
        github: {
          title: "GitHubをチェック",
          label: "クアン・ファムのGitHubプロフィールを見る"
        }
      }
    },
  },
}

// Initialize i18next only if it hasn't been initialized yet
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
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
