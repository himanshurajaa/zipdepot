function throttle(callback) {
    let requestId = null, lastArgs;
    const later = context => () => {
        requestId = null,
        callback.apply(context, lastArgs)
    }
      , throttled = (...args) => {
        lastArgs = args,
        requestId === null && (requestId = requestAnimationFrame(later(this)))
    }
    ;
    return throttled.cancel = () => {
        cancelAnimationFrame(requestId),
        requestId = null
    }
    ,
    throttled
}
function getHeadingKeyframe(element, options={}) {
    if (!element)
        return [];
    const splitLines = element.querySelector("split-lines")?.lines;
    window.themeVariables = {
      settings: {
      headingApparition: "none"
    }
    }
    if (window.themeVariables.settings.headingApparition === "fade" || !splitLines)
        return [element, {
            opacity: [0, 1]
        }, {
            duration: .2,
            ...options
        }];
    switch (element.style.opacity = "1",
    window.themeVariables.settings.headingApparition) {
    case "split_fade":
        return [splitLines, {
            transform: ["translateY(0.5em)", "translateY(0)"],
            opacity: [0, 1]
        }, {
            duration: .3,
            delay: stagger2(.1),
            ...options
        }];
    case "split_clip":
        return [splitLines, {
            clipPath: ["inset(0 0 100% 0)", "inset(0 0 -0.3em 0)"],
            transform: ["translateY(100%)", "translateY(0)"],
            opacity: [0, 1]
        }, {
            duration: .7,
            delay: stagger2(.15),
            easing: [.22, 1, .36, 1],
            ...options
        }];
    case "split_rotation":
        const rotatedSpans = splitLines.map(line => line.querySelector("span"));
        return rotatedSpans.forEach(span => span.style.transformOrigin = "top left"),
        splitLines.forEach(line => line.style.clipPath = "inset(0 0 -0.3em 0)"),
        [rotatedSpans, {
            transform: ["translateY(0.5em) rotateZ(5deg)", "translateY(0) rotateZ(0)"],
            opacity: [0, 1]
        }, {
            duration: .4,
            delay: stagger2(.1),
            ...options
        }]
    }
}
import {animate as animate13, timeline as timeline11, inView as inView8} from "vendor";
var ImagesWithTextScrolling = class extends HTMLElement {
    connectedCallback() {
        inView8(this, this._reveal.bind(this)),
        this.hasAttribute("scrolling-experience") && (this._imageToTransitionItems = Array.from(this.querySelectorAll(".images-scrolling-desktop__media-wrapper > :not(:first-child)")),
        this._mainImage = this.querySelector(".images-scrolling-desktop__media-wrapper > :first-child"),
        this._contentItems = Array.from(this.querySelectorAll(".images-scrolling__content")),
        this._imageToTransitionItems.length > 0 && window.addEventListener("scroll", throttle(this._onScroll.bind(this))))
    }
    _reveal() {
        Array.from(this.querySelectorAll('[reveal-on-scroll="true"]')).forEach(heading => {
            animate13(...getHeadingKeyframe(heading))
        }
        )
    }
    _onScroll() {
        const imageRect = this._mainImage.getBoundingClientRect()
          , imageBottom = imageRect.bottom
          , imageEffect = this.getAttribute("scrolling-experience");
        for (const [index,contentItem] of this._contentItems.entries()) {
            const contentItemRect = contentItem.getBoundingClientRect()
              , image = this._imageToTransitionItems[index - 1]
              , content = this._contentItems[index];
            if (contentItemRect.top < imageBottom - imageRect.height * .1 && contentItemRect.bottom > imageBottom) {
                image && !image.classList.contains("is-visible") && (image.classList.add("is-visible"),
                imageEffect === "fade" ? timeline11([[image, {
                    opacity: [null, 1]
                }, {
                    duration: .2
                }], [content, {
                    opacity: [null, 1]
                }, {
                    duration: .45,
                    at: "<"
                }]]) : timeline11([[image, {
                    opacity: [null, 1],
                    clipPath: ["inset(100% 0 0 0)", "inset(0 0 0 0)"]
                }, {
                    duration: .35,
                    easing: [.99, .01, .5, .94],
                    opacity: {
                        duration: 0
                    }
                }], [content, {
                    opacity: [null, 1]
                }, {
                    duration: .45,
                    at: "<"
                }]]));
                break
            }
            if (contentItemRect.top > imageBottom - imageRect.height * .1) {
                image && image.classList.contains("is-visible") && (image.classList.remove("is-visible"),
                imageEffect === "fade" ? timeline11([[image, {
                    opacity: [null, 0]
                }, {
                    duration: .2
                }], [content, {
                    opacity: [null, 0]
                }, {
                    duration: .2,
                    at: "<"
                }]]) : timeline11([[image, {
                    opacity: [null, 1],
                    clipPath: ["inset(0 0 0 0)", "inset(100% 0 0 0)"]
                }, {
                    duration: .35,
                    easing: [.99, .01, .5, .94],
                    opacity: {
                        duration: 0
                    }
                }], [content, {
                    opacity: [null, 0]
                }, {
                    duration: .2,
                    at: "<"
                }]]));
                break
            }
        }
    }
}
;
window.customElements.get("images-with-text-scrolling") || window.customElements.define("images-with-text-scrolling", ImagesWithTextScrolling);