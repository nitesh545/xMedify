import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {Stack} from "@mui/system";
import {Button, Divider, Typography} from "@mui/material";

function CustomTabPanel(props) {
	const {children, value, index, ...other} = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{p: 3}}>{children}</Box>}
		</div>
	);
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const slots = [
	{dayTime: 'Morning', timeSlots: ["11:30 AM"]},
	{dayTime: 'Afternoon', timeSlots: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "2:30 PM"]},
	{dayTime: 'Evening', timeSlots: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"]},
];

export default function SlotTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{width: '100%'}}>
			<Box sx={{borderBottom: 1, borderColor: 'divider'}}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
					<Tab label="Today" {...a11yProps(0)} />
					<Tab label="Tomorrow" {...a11yProps(1)} />
				</Tabs>
			</Box>
			<CustomTabPanel value={value} index={0}>
				<Stack divider={<Divider variant='middle' sx={{my: '1rem'}}/>}>
					{
						slots.map((slot, index) => (
							<Box key={index} sx={{display: 'flex'}}>
								<Box sx={{maxWidth: '2.5vw'}}>
									<Typography>{slot.dayTime}</Typography>
								</Box>
								<Box sx={{display: 'flex', ml: '1rem'}}>
									{
										slot.timeSlots.map((timeSlot, i) => (
											<Box key={i} ml={4}>
												<Button variant='outlined'>{timeSlot}</Button>
											</Box>
										))
									}
								</Box>
							</Box>
						))
					}
				</Stack>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				<Stack divider={<Divider variant='middle' sx={{my: '1rem'}}/>}>
					{
						slots.map((slot, index) => (
							<Box key={index} sx={{display: 'flex'}}>
								<Box sx={{maxWidth: '2.5vw'}}>
									<Typography>{slot.dayTime}</Typography>
								</Box>
								<Box sx={{display: 'flex', ml: '1rem'}}>
									{
										slot.timeSlots.map((timeSlot, i) => (
											<Box key={i} ml={4}>
												<Button variant='outlined'>{timeSlot}</Button>
											</Box>
										))
									}
								</Box>
							</Box>
						))
					}
				</Stack>
			</CustomTabPanel>
		</Box>
	);
}