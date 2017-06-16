;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shezhi" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M915.0996 607.1172H1000V392.822265625h-84.900390625c-86.1211 0-106.6289-49.7441-45.8984-110.5352l60.1191-60.1191-151.5508-151.4902-60.0586 60.0586c-60.8516 60.8516-110.6563 40.2227-110.4746-45.7773 0-0.2441-0.123-0.3672-0.123-0.5488V0H392.9140625v85.205078125c-0.2441 85.8164-49.8652 106.3242-110.627 45.5332l-60.0898-60.0586L70.709 222.168l60.0586 60.1191c60.8223 60.791 40.1914 110.5352-45.7773 110.5352H0v214.294921875h84.9921875c85.9688 0 106.5977 49.7441 45.7773 110.5957l-60.0586 60.0586 151.4902 151.5508 60.0898-60.1191c60.7598-60.7305 110.3828-40.2227 110.627 45.5332V1000h214.203125v-84.412109375c0-0.1836 0.123-0.3672 0.123-0.5488-0.1836-85.998 49.6211-106.5684 110.4746-45.8379l60.0586 60.1191 151.5508-151.5508-60.1191-60.0586C808.4727 656.8613 828.9805 607.1172 915.0996 607.1172zM500 687.5c-103.5469 0-187.5-83.9844-187.5-187.5s83.9531-187.5 187.5-187.5c103.5156 0 187.5 83.9844 187.5 187.5S603.5156 687.5 500 687.5z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M445.150988 851.897294m-71.372537 0a69.747 69.747 0 1 0 142.745075 0 69.747 69.747 0 1 0-142.745075 0Z"  ></path>' +
    '' +
    '<path d="M775.150864 851.897294m-71.372537 0a69.747 69.747 0 1 0 142.745075 0 69.747 69.747 0 1 0-142.745075 0Z"  ></path>' +
    '' +
    '<path d="M895.056768 724.676797l-576.12139 0c-9.4093 0-17.605983-6.41613-19.866467-15.549138L176.027597 212.000392 62.085522 212.000392c-11.302417 0-20.466124-9.162684-20.466124-20.466124s9.163707-20.466124 20.466124-20.466124l129.959887 0c9.4093 0 17.605983 6.41613 19.866467 15.549138l123.041314 497.127268L876.966761 683.744549l50.662867-409.391041L385.450281 274.353508c-11.302417 0-20.466124-9.163707-20.466124-20.466124 0-11.30344 9.163707-20.466124 20.466124-20.466124l565.334719 0c5.865591 0 11.449773 2.51631 15.334243 6.912433 3.885494 4.3951 5.696746 10.246365 4.976338 16.066931l-55.728232 450.323289C914.098449 716.977441 905.388067 724.676797 895.056768 724.676797z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ren" viewBox="0 0 1491 1024">' +
    '' +
    '<path d="M487.539094 357.084123c-1.676276-18.513542 5.941469-32.557013 10.504665-40.975645 0.875389-1.601775 2.030157-3.743684 2.588916-5.028829-3.874061-18.662544-6.611979-36.542825-8.437258-53.678095l-23.579621-4.078939-15.011986-14.024846c-60.476327-37.47409-125.310973-11.193801-159.991269 2.980047-50.027538 16.390258-81.671911 87.706506-59.582313 193.200167 3.762309 18.010659-9.796904 26.056785-8.90289 35.89094 1.937031 21.512214 2.328162 73.197403 22.499354 85.937103 1.862529 1.173393 16.166755 4.7867 16.092253 3.818185 1.974281 20.916204 3.948562 41.869659 5.922843 62.785864 5.028829 13.931719 17.116645 15.477619 20.599574 35.090053l-15.458993 3.818185c-6.947234 14.881609-19.649684 44.812456-32.631514 53.827098-10.858546 2.998672-21.754343 5.978719-32.631514 8.977391-38.125975 15.738373-80.479892 34.605795-118.717619 50.847051-34.792048 14.788483-76.438204 20.059441-89.010277 56.82577 0 24.957893-2.328162 83.944197-1.676276 116.631587L172.28738 949.927209c0.223504-10.672293 0.465632-21.363211 0.726386-31.681624 0.540134-22.648357 1.043016-44.030193 1.043016-57.291402l0-7.170738 2.328162-6.779607c20.450572-59.749941 74.352171-78.580112 117.655978-93.685225 10.933047-3.818185 21.270085-7.412867 30.862111-11.491806 21.009331-8.921515 42.949926-18.43904 65.039524-28.012441 32.557013-14.099347 66.082541-28.627076 97.633787-41.702032-1.564525-3.464305-3.017298-6.611979-4.265192-9.294021-6.928609-1.005766-13.838593-1.992906-20.767202-2.998672 1.080267-23.020863 15.216865-24.287382 20.767202-41.851034 4.898452-15.533495 0.502883-35.704687 8.288256-50.064788 5.38271-9.983157 17.563652-10.057658 23.654122-18.588043 5.513087-7.766747 9.163644-21.325961 10.877171-30.82486 0.912639-5.10333 1.788028-10.80267 2.346787-16.669637-33.022645-30.675858-37.15746-90.314047-39.914004-131.047564C488.172354 365.614507 487.874349 360.976809 487.539094 357.084123zM1488.834861 833.276997c-12.572073-36.766329-54.236854-42.018662-89.028902-56.82577-38.200477-16.241256-80.573019-35.108678-118.698994-50.847051-10.858546-2.998672-21.754343-5.978719-32.631514-8.977391-13.000455-9.014642-25.684279-38.945488-32.650139-53.827098-6.909984-1.005766-13.857218-1.992906-20.767202-2.998672 1.080267-23.020863 15.198239-24.287382 20.767202-41.851034 4.898452-15.533495 0.521508-35.704687 8.26963-50.064788 5.38271-9.983157 17.563652-10.057658 23.654122-18.588043 5.513087-7.766747 9.163644-21.325961 10.858546-30.82486 3.147675-17.377399 5.885593-41.143273-2.309536-58.390294-4.693574-9.890031-7.673621-10.839921-8.977391-22.853235-1.58315-14.564979 4.265192-62.078103 4.507321-72.359264 0.614635-26.67142-0.037251-50.77255-6.444351-76.736208 0 0-7.766747-23.523745-19.947689-30.601357l-24.268757-4.209316-15.011986-14.024846c-60.476327-37.47409-125.292348-11.193801-159.991269 2.980047-19.314429 6.313974-35.835064 20.93483-47.624875 42.409793-0.391131 7.114862-0.502883 12.944579-0.204878 15.943251 0.167628 1.564525 0.335255 2.495789 0.428382 2.942796 0.391131 0.782262 0.875389 1.527274 1.359646 2.346787 1.769403 3.054548 4.209316 7.226614 6.928609 12.981829 17.023518 35.835064 11.976064 78.803616 6.705106 108.026701-2.607541 14.415977-8.996017 41.459903-22.51798 60.476327-3.538806 4.972953-7.431492 8.977391-11.361429 12.329944 2.141909 22.778734 6.760981 48.984521 20.320195 57.552156 1.881155 1.173393 16.166755 4.7867 16.092253 3.818185 1.974281 20.916204 3.948562 41.869659 5.922843 62.785864 5.028829 13.931719 17.098019 15.477619 20.599574 35.090053l-15.458993 3.818185c-1.210644 2.57029-2.607541 5.662089-4.15344 9.014642 31.700249 13.149457 65.467906 27.733062 98.173921 41.925535 22.145474 9.592026 44.12332 19.109551 65.169901 28.068317 9.573401 4.078939 19.910439 7.673621 30.843486 11.491806 43.303807 15.105113 97.224031 33.935284 117.655978 93.685225l2.328162 6.779607 0 7.170738c0 13.261209 0.502883 34.643046 1.061642 57.291402 0.242129 10.318412 0.484258 21.009331 0.726386 31.681624l171.352698 0C1491.181648 917.221194 1488.834861 858.23489 1488.834861 833.276997z"  ></path>' +
    '' +
    '<path d="M933.428615 95.547755c8.977391 36.431074 9.871405 70.235981 9.051893 107.63557-0.335255 14.415977-8.54901 81.094527-6.313974 101.507848 1.825279 16.85589 6.01597 18.196912 12.590698 32.110006 11.491806 24.175631 7.654996 57.49628 3.240801 81.876789-2.421288 13.33571-7.505993 32.352134-15.254115 43.229306-8.54901 12.013314-25.628404 12.087815-33.190273 26.094036-10.877171 20.152567-4.730824 48.463013-11.603558 70.235981-7.785373 24.697139-27.639935 26.429291-29.148584 58.744175 9.741028 1.396897 19.444806 2.793794 29.148584 4.209316 9.741028 20.878954 27.584059 62.87899 45.799596 75.506939 15.254115 4.227942 30.526856 8.418633 45.799596 12.590698 53.473217 22.126848 112.906528 48.574765 166.510122 71.353499 48.816894 20.767202 107.244439 28.161443 124.901217 79.734881 0 34.996926 3.278052 117.711854 2.365412 163.623202L214.082538 1024c-0.875389-45.911348 2.384038-128.626275 2.384038-163.623202 17.656778-51.592062 76.065698-58.986304 124.882592-79.734881 53.603594-22.760108 113.036905-49.22665 166.510122-71.353499 15.272741-4.172066 30.545481-8.381382 45.799596-12.590698 18.234162-12.627949 36.058568-54.627985 45.799596-75.506939l21.679841-5.326834c-4.917077-27.584059-21.866094-29.707343-28.943706-49.245275-2.756543-29.353462-5.531712-58.7628-8.306881-88.116263 0.111752 1.396897-19.947689-3.669183-22.55523-5.326834-28.273195-17.880282-28.850579-90.388548-31.569872-120.542898-1.229269-13.782717 17.76853-25.08827 12.478947-50.362793-30.973863-147.996581 13.410211-248.070281 83.590316-271.016643 48.705142-19.910439 139.652449-56.807145 224.472035-4.209316l21.065207 19.66831 34.047036 5.922843C922.514193 62.580985 933.428615 95.547755 933.428615 95.547755z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-google" viewBox="0 0 1027 1024">' +
    '' +
    '<path d="M261.44 508.8l404.928 0c-4.48 101.888-37.632 184.384-99.328 247.68-61.696 63.104-139.904 94.72-234.56 94.72-49.088 0-94.4-9.472-135.872-28.224-41.536-18.88-78.72-46.72-111.68-83.84-27.904-30.784-49.024-65.792-63.36-105.152C7.168 594.816 0 552.768 0 507.968c0-45.632 8.704-88.96 26.112-129.92C43.456 337.088 68.928 300.16 102.464 267.328c31.744-31.68 67.264-55.36 106.624-70.976C248.192 180.672 291.776 172.8 339.776 172.8c66.112 0 124.16 15.424 174.08 46.4 49.856 30.912 87.488 74.944 113.088 131.968L510.4 351.168c-21.568-27.84-47.36-48.704-77.312-62.72C403.008 274.368 369.472 267.328 332.608 267.328c-30.912 0-60.288 5.76-88.192 17.408-27.904 11.712-52.672 28.608-74.24 50.688C147.648 358.464 130.048 385.152 117.504 415.68 104.832 446.144 98.624 477.184 98.624 508.8c0 34.048 5.632 66.304 17.088 96.64 11.392 30.336 27.776 56.512 48.96 78.656 22.464 23.296 48.512 41.344 77.888 54.208 29.376 12.864 59.328 19.264 89.92 19.264 49.792 0 93.696-13.184 131.84-39.616 38.016-26.368 69.376-65.472 94.016-117.12L261.44 600.832 261.44 508.8z"  ></path>' +
    '' +
    '<path d="M859.008 654.528 859.008 536.256 741.632 536.256 741.632 486.784 859.008 486.784 859.008 369.408 909.056 369.408 909.056 486.784 1026.496 486.784 1026.496 536.256 909.056 536.256 909.056 654.528Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)