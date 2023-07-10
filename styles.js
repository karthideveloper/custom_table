/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import colors from '../../../theme/colors';
import { FONT } from '../../../theme/font';

export const CustomTableContainer = styled('div')({
  '.MuiTableContainer-root': {
    paddingTop: '24px',
  },
  '.MuiTable-root': {
    minWidth: 'auto',
  },
  '.MuiTableCell-root': {
    borderBottom: 'none',
  },
  '.MuiTableRow-root': {
    borderBottom: '1px solid #D1D1D1',
  },
  '.table-head-cell': {
    color: colors.text.primary,
    fontWeight: 500,
    fontSize: '18px',
    fontFamily: FONT.w500,
    fontStyle: 'normal',
    lineHeight: '24px',
  },
  '.sort-icon': {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    '.rotate': {
      rotate: '180deg',
    },
  },
  '.table-cell': {
    fontFamily: FONT.w500,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: colors.table.default,
  },
});
