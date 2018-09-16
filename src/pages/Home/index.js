import React from 'react';
import Code from '@components/Code';
import { HMR } from '@pwa/preset-react';
import Window from '@components/Window';
import Text from '@components/Post/Text';
import Quote from '@components/Post/Quote';

import style from './index.sass';

function Home() {
	return (
		<Text />
	);
}

export default HMR(Home, module);
