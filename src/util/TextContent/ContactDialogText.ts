import { LanguageContextType } from "../../config/languageContext.ts";

const texts = {
    fr: {
        title: 'Contact',
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Email',
        message: 'Message',
        cancel: 'Fermer',
        send: 'Envoyer',
        sending: 'Envoi...',
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi. Veuillez réessayer.'
    },
    en: {
        title: 'Contact',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        message: 'Message',
        cancel: 'Close',
        send: 'Send',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.'
    },
    zh: {
        title: '联系我',
        firstName: '名',
        lastName: '姓',
        email: '邮箱',
        message: '留言',
        cancel: '关闭',
        send: '发送',
        sending: '发送中...',
        success: '消息发送成功！',
        error: '发送失败，请重试。'
    }
};

export const getContactDialogText = (language: LanguageContextType) => {
    return texts[language] || texts.fr;
}