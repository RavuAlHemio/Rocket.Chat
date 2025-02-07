import { Box, Tile, Button, Icon } from '@rocket.chat/fuselage';
import React, { FC } from 'react';

type NoResultsProps = {
	icon: string;
	title: string;
	description: string;
	buttonTitle?: string;
	buttonAction?: () => void;
};

const NoResults: FC<NoResultsProps> = ({ icon, title, description, buttonTitle, buttonAction }) => (
	<Box textAlign='center'>
		<Box
			mbs='x60'
			mbe='x20'
			style={{
				whiteSpace: 'nowrap',
				textTransform: 'uppercase',
				backgroundColor: 'var(--color-gray-lightest)',
				borderRadius: '9999px',
				display: 'inline-block',
				padding: '1rem',
			}}
		>
			<Icon name={icon} size='x30' />
		</Box>
		<Box is='h2' fontScale='h2' flexGrow={1}>
			{title}
		</Box>
		<Tile paddingBlockStart='x5' fontScale='p3' elevation='0' color='info' textAlign='center'>
			<Box margin='auto' maxWidth='400px'>
				{description}
			</Box>
		</Tile>
		{buttonTitle && buttonAction && (
			<Button marginBlockStart='x20' primary onClick={buttonAction}>
				{buttonTitle}
			</Button>
		)}
	</Box>
);

export default NoResults;
