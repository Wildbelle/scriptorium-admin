import { ThemeOptions } from '@mui/material'

export const MuiChipStyleOverrides: ThemeOptions['components']['MuiChip']['styleOverrides'] =
    {
        root: ({ theme, ownerState }) => ({
            padding: '2px 8px',
            height: 'auto',
            fontWeight: '500',
            fontSize: '12px',
            lineHeight: '18px',
            gap: '6px',
            '&.cubed': {
                padding: '4px 12px',
                borderRadius: '8px',
                fontSize: '14px',
                lineHeight: '20px',
            },
            ...(ownerState.color && theme.palette[ownerState.color]
                ? {
                      background:
                          theme.palette[ownerState.color][
                              ownerState.color === 'secondary' ? '100' : 'light'
                          ],
                      border: `1px solid ${
                          ownerState.color === 'unset'
                              ? theme.palette.secondary['300']
                              : 'transparent'
                      }`,
                      color: theme.palette[ownerState.color].dark,
                      '&:hover': {
                          background:
                              theme.palette[ownerState.color][
                                  ownerState.color === 'secondary'
                                      ? '100'
                                      : 'light'
                              ],
                          '&.hoverable': {
                              cursor: 'pointer',
                              background:
                                  theme.palette[ownerState.color][
                                      ownerState.color === 'secondary'
                                          ? '200'
                                          : '100'
                                  ],
                          },
                      },
                  }
                : {
                      background: '#ffffff',
                      border: `1px solid ${theme.palette.secondary['300']}`,
                      color: theme.palette.secondary.dark,
                      '&:hover': {
                          background: '#fff',
                          '&.hoverable': {
                              cursor: 'pointer',
                              background: theme.palette.secondary.light,
                          },
                      },
                  }),
        }),
        label: {
            fontFamily: 'Inter',
            padding: '0',
        },
        deletable: {
            paddingRight: '6px',
        },
        deleteIcon: {
            margin: '0 0 0 4px',
        },
        avatar: ({ theme, ownerState }) => ({
            ...(ownerState.color && theme.palette[ownerState.color]
                ? {
                      '&.bubble': {
                          background: theme.palette[ownerState.color]['500'],
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                      },
                      color: theme.palette[ownerState.color]['500'],
                      '&.custom-hero-icon': {
                          color: theme.palette[ownerState.color]['700'],
                      },
                  }
                : {
                      '&.bubble': {
                          background: theme.palette.secondary['500'],
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                      },
                      color: theme.palette.secondary['500'],
                      '&.custom-hero-icon': {
                          color: theme.palette.secondary['700'],
                      },
                  }),
            margin: 0,
            maxHeight: '16px',
            maxWidth: '16px',
        }),
    }

export const MuiChipVariants: ThemeOptions['components']['MuiChip']['variants'] =
    [
        {
            props: { variant: 'cubed' },
            style: {
                padding: '4px 12px',
                borderRadius: '8px',
                fontSize: '12px',
                lineHeight: '18px',
            },
        },
        {
            props: { variant: 'button-outlined' },
            // @ts-ignore
            style: ({ theme, ownerState }) => ({
                padding: '3px 10px',
                borderRadius: '22px',
                width: '38px',
                height: '22px',
                background: 'transparent',
                ...(ownerState?.color
                    ? {
                          border: `1px solid ${
                              theme.palette[ownerState.color]['400']
                          }`,
                      }
                    : {
                          border: `1px solid ${theme.palette.secondary['400']}`,
                      }),
                '&:hover': {
                    cursor: 'pointer',
                },
            }),
        },
        {
            props: { variant: 'button-icon' },
            style: {
                padding: '3px',
                width: '22px',
                height: '22px',
                background: 'transparent',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        },
        {
            props: { variant: 'unset' },
            style: ({ theme }) => ({
                color: theme.palette.secondary['400'],
                '.custom-hero-icon': {
                    color: `${theme.palette.secondary['400']} !important`,
                },
            }),
        },
    ]
