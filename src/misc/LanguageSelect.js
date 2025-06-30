import React from 'react';

import { useLingui } from '@lingui/react';
import makeStyles from '@mui/styles/makeStyles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: '1rem',
		fontWeight: '400',
		backgroundColor: 'none',
		color: theme.palette.text.primary,
		borderButtom: 'none',
		'&:hover': {
			color: theme.palette.text.primary,
		},
		'& fieldset': {
			display: 'none',
		},
		'& .MuiSelect-select': {
			padding: '0px 0px',
			marginRight: '10px',
		},
		'&:before': {
			borderBottom: 'none',
		},
	},
}));

export default function LanguageSelect(props) {
	const classes = useStyles();
	const { i18n } = useLingui();

	const handleChange = (event) => {
		const language = event.target.value;

		i18n.activate(language);

		props.onChange(language);
	};

	return (
		<Select className={classes.root} variant="standard" displayEmpty value={i18n.locale} onChange={handleChange}>
			<MenuItem value="en">English</MenuItem>
			<MenuItem value="th">ไทย</MenuItem>
		</Select>
	);
}

LanguageSelect.defaultProps = {
	onChange: function (lang) {},
};
