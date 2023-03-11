import React, { createContext, useReducer } from 'react';
import * as actionType from '../store/actions';
import { CONFIG } from '../config/constant';

const initialState = {
  ...CONFIG,
  isOpen: [], //for active default menu
  isTrigger: [] //for active default menu, set blank for horizontal
};
export const ConfigContext = createContext(initialState);

const ConfigProvider = ({ children }) => {
  let trigger = [];
  let open = [];

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case actionType.BOX_LAYOUT:
        return {
          ...state,
          boxLayout: !state.boxLayout
        };
      case actionType.CHANGE_LAYOUT:
        return {
          ...state,
          layout: action.layout
        };
      case actionType.CHANGE_SUB_LAYOUT:
        return {
          ...state,
          subLayout: action.subLayout
        };
      case actionType.COLLAPSE_MENU:
        return {
          ...state,
          collapseMenu: !state.collapseMenu
        };
      case actionType.COLLAPSE_TOGGLE:
        if (action.menu.type === 'sub') {
          open = state.isOpen;
          trigger = state.isTrigger;

          const triggerIndex = trigger.indexOf(action.menu.id);
          if (triggerIndex > -1) {
            open = open.filter((item) => item !== action.menu.id);
            trigger = trigger.filter((item) => item !== action.menu.id);
          }

          if (triggerIndex === -1) {
            open = [...open, action.menu.id];
            trigger = [...trigger, action.menu.id];
          }
        } else {
          open = state.isOpen;
          const triggerIndex = state.isTrigger.indexOf(action.menu.id);
          trigger = triggerIndex === -1 ? [action.menu.id] : [];
          open = triggerIndex === -1 ? [action.menu.id] : [];
        }

        return {
          ...state,
          isOpen: open,
          isTrigger: trigger
        };
      case actionType.CONFIG_BLOCK:
        return {
          ...state,
          configBlock: !state.configBlock
        };
      case actionType.HEADER_BACK_COLOR:
        return {
          ...state,
          headerBackColor: action.headerBackColor
        };
      case actionType.HEADER_FIXED_LAYOUT:
        return {
          ...state,
          headerFixedLayout: !state.headerFixedLayout,
          headerBackColor: !state.headerFixedLayout && initialState.headerBackColor === '' ? 'header-blue' : state.headerBackColor
        };
      case actionType.LAYOUT_TYPE:
        return {
          ...state,
          layoutType: action.layoutType,
          headerBackColor: action.headerBackColor ? action.headerBackColor : state.headerBackColor,
          navBackColor: action.navBackColor ? action.navBackColor : state.navBackColor,
          navBrandColor: action.navBrandColor ? action.navBrandColor : state.navBrandColor,
          navBackImage: action.layoutType === 'menu-light' ? false : state.navBackImage
        };
      case actionType.LAYOUT6_BACKGROUND:
        return {
          ...state,
          layout6Background: action.layout6Background,
          layout6BackSize: action.layout6BackSize ? action.layout6BackSize : state.layout6BackSize
        };
      case actionType.NAV_ACTIVE_LIST_COLOR:
        return {
          ...state,
          navActiveListColor: action.navActiveListColor
        };
      case actionType.NAV_BRAND_COLOR:
        return {
          ...state,
          navBrandColor: action.navBrandColor
        };
      case actionType.NAV_BACK_COLOR: