const tg = window.Telegram.WebApp;
import React from "react";


export function useTelegram() {

	const onClose = () => {
		tg.close()
	}

	const onToggleButton = () => {
		if (tg.MainButton.isVisibler) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
		}
	}

	return {

		onClose,
		onToggleButton,
		tg,
		user: tg.initDataUnsafe?.user,

	};
};