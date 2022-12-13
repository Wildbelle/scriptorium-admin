import React, { FunctionComponent } from 'react'
import { CSSProperties, useState } from 'react'

import {
    BurgerProps,
    CommonBurgerProps,
} from '../../@types/custom/BurgerButton'

const area = 28

export const Burger = (({
    color = 'currentColor',
    distance = 'md',
    duration = 0.6,
    easing = 'cubic-bezier(0, 0, 0, 1)',
    hideOutline = true,
    label,
    lines = 2,
    onToggle,
    render,
    rounded = false,
    size = 32,
    toggle,
    toggled,
}) => {
    const [toggledInternal, toggleInternal] = useState(false)

    const width = Math.max(14, Math.min(area, size))
    const room = Math.round((area - width) / 2)

    const barHeightRaw = width / 14
    const barHeight = Math.round(barHeightRaw)

    const space = distance === 'lg' ? 0.25 : distance === 'sm' ? 0.75 : 0.5
    const marginRaw = width / (lines * (space + lines))
    const margin = Math.round(marginRaw)

    const height = barHeight * lines + margin * (lines - 1)
    const topOffset = Math.round((area - height) / 2)

    const translate =
        lines === 2
            ? distance === 'lg'
                ? 4.0425
                : distance === 'sm'
                ? 5.1625
                : 4.6325
            : distance === 'lg'
            ? 6.7875
            : distance === 'sm'
            ? 8.4875
            : 7.6675
    const deviation =
        (barHeightRaw - barHeight + (marginRaw - margin)) / (lines = 2)
    const move = parseFloat(
        (width / translate - deviation / (4 / 3)).toFixed(2)
    )
    const time = Math.max(0, duration)

    const burgerStyles: CSSProperties = {
        cursor: 'pointer',
        height: `${area}px`,
        position: 'relative',
        transition: `${time}s ${easing}`,
        userSelect: 'none',
        width: `${area}px`,
    }

    const barStyles: CSSProperties = {
        background: color,
        height: `${barHeight}px`,
        left: `${room}px`,
        position: 'absolute',
    }

    if (hideOutline) {
        burgerStyles['outline'] = 'none'
    }

    if (rounded) {
        barStyles['borderRadius'] = '9em'
    }

    const toggleFunction = toggle || toggleInternal
    const isToggled = toggled !== undefined ? toggled : toggledInternal

    const handler = () => {
        toggleFunction(!isToggled)

        if (typeof onToggle === 'function') onToggle(!isToggled)
    }

    return render({
        barHeight,
        barStyles,
        burgerStyles,
        easing,
        handler,
        isToggled,
        label,
        margin,
        move,
        time,
        topOffset,
        width,
    })
}) as FunctionComponent<BurgerProps>

export const BurgerButton = (props => (
    <Burger
        {...props}
        lines={2}
        render={options => (
            <div
                className="BurgerButton"
                aria-label={options.label}
                aria-expanded={options.isToggled}
                data-testid="squeeze"
                onClick={options.handler}
                onKeyUp={e => e.key === 'Enter' && options.handler()}
                role="button"
                style={options.burgerStyles}
                tabIndex={0}
            >
                <div
                    data-testid="bar-wrap-top"
                    style={{
                        transition: `${options.time / 2}s ${options.easing} ${
                            options.isToggled ? '0s' : `${options.time / 2}s`
                        }`,
                        transform: `${
                            options.isToggled
                                ? `translateY(${
                                      options.barHeight / 2 + options.margin / 2
                                  }px)`
                                : 'none'
                        }`,
                    }}
                >
                    <div
                        data-testid="bar-top"
                        style={{
                            ...options.barStyles,
                            width: `${options.width}px`,
                            top: `${options.topOffset}px`,
                            transition: `${options.time / 2}s ${
                                options.easing
                            } ${
                                options.isToggled
                                    ? `${options.time / 2}s`
                                    : '0s'
                            }`,
                            transform: `${
                                options.isToggled ? `rotate(45deg)` : 'none'
                            }`,
                        }}
                    />
                </div>

                <div
                    data-testid="bar-wrap-bottom"
                    style={{
                        transition: `${options.time / 2}s ${options.easing} ${
                            options.isToggled ? '0s' : `${options.time / 2}s`
                        }`,
                        transform: `${
                            options.isToggled
                                ? `translateY(-${
                                      options.barHeight / 2 + options.margin / 2
                                  }px)`
                                : 'none'
                        }`,
                    }}
                >
                    <div
                        data-testid="bar-bottom"
                        style={{
                            ...options.barStyles,
                            width: `${options.width}px`,
                            top: `${
                                options.topOffset +
                                options.barHeight +
                                options.margin
                            }px`,
                            transition: `${options.time / 2}s ${
                                options.easing
                            } ${
                                options.isToggled
                                    ? `${options.time / 2}s`
                                    : '0s'
                            }`,
                            transform: `${
                                options.isToggled ? `rotate(-45deg)` : 'none'
                            }`,
                        }}
                    />
                </div>
            </div>
        )}
    />
)) as FunctionComponent<CommonBurgerProps>
