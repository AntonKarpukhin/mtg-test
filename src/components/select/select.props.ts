export interface SelectProps {
	lang: string[];
	activeLanguage: string;
	onChangeLanguage: (lang: string) => void;
}

export interface SelectState {
	selectedLang: string;
}