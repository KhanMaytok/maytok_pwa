import React from 'react';
import { HMR } from '@pwa/preset-react';
import Text from '@components/Post/Text';
import Quote from '@components/Post/Quote';
import Image from '@components/Post/Image';

function Home() {
	return (
		<React.Fragment>
			<Text />
			<Image />
			<Quote />
		</React.Fragment>
	);
}

export default HMR(Home, module);
