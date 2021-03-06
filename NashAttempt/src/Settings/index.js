import React, { Component } from "react";
import Settings from "./Settings.js";
import EditProfileScreen  from "./EditProfileScreen.js";
import HelpScreen    from "./HelpScreen.js"
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator(
	{
		Settings : { screen: Settings }, 
		EditProfile  : { screen: EditProfileScreen },
		Help     : { screen: HelpScreen }
	},
	{
	    initialRouteName: "Settings"
	}
));



