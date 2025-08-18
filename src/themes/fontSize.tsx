import { useEffect, useState } from 'react';

const fontSizes = {
	32: {
		default: '32px',
		sm: '16px',
		md: '18px',
		lg: '24px',
	},
	24: {
		default: '24px',
		sm: '14px',
		md: '16px',
		lg: '20px',
	},
	18: {
		default: '18px',
		sm: '12px',
		md: '14px',
		lg: '16px',
	},
	16: {
		default: '16px',
		sm: '10px',
		md: '12px',
		lg: '14px',
	},
};

type FontSizeKey = keyof typeof fontSizes;

export const getFontSize = (sizeKey: FontSizeKey): string => {
	const screenWidth = window.innerWidth;

	if (screenWidth <= 767) {
		return fontSizes[sizeKey].sm;
	} else if (screenWidth <= 992) {
		return fontSizes[sizeKey].md;
	} else if (screenWidth <= 1280) {
		return fontSizes[sizeKey].lg;
	} else {
		return fontSizes[sizeKey].default;
	}
};

const useFontSize = (sizeKey: FontSizeKey): string => {
	const [fontSize, setFontSize] = useState(getFontSize(sizeKey));

	useEffect(() => {
		const handleResize = (): void => {
			setFontSize(getFontSize(sizeKey));
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [sizeKey]);

	return fontSize;
};

export default fontSizes;
export { useFontSize };
