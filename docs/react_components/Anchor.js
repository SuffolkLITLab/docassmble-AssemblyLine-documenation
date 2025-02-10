import useBrokenLinks from "@docusaurus/useBrokenLinks";
import { useEffect, useState } from 'react';


export function Anchor({
  id, className="", children="", do_highlight=true, ...other_props
}) {
  /** Make sure Docusaurus sees this element as a valid element to link to,
   *    avoiding warnings about broken links.
   * 
   * It can also highlight text that is in this element when users navigate
   *    to this element.
   * 
   * @params {object} obj - Named arguments.
   * @params {string} obj.id - Required. Element id.
   * @params {string} [obj.className] - 0 or more additional class names.
   * @params {React | [React]} [obj.children] - 0 to any number of components.
   * @params {bool} [obj.do_highlight] - Default is `true`. Whether to give this
   *     element's children a CSS class.
   * @params {object} [obj...other_props] - All other component properties
   * 
   * @returns {React} - React component
   * */
  useBrokenLinks().collectAnchor(id);

  // Note: Attempts to highlight the Anchor text on :target failed. A
  // long-standing problem with React:
  // https://github.com/vercel/next.js/issues/51346. The workarounds there are
  // for next.js, not plain React. It may have something to do with `pushState`
  let highlight_class = "";
  // Force a re-render/recalculation with the changing value of Date.now()
  if ( do_highlight && useLocationHash( Date.now() ) === "#" + id ) {
    highlight_class = " highlight";
  }

  return <span
    id={ id }
    style={{ scrollMarginTop: "calc(var(--ifm-navbar-height) + 0.7em)" }}
    className={ className + " target" + highlight_class }
    { ...other_props }>{ children }</span>
}


function useLocationHash( new_val ) {
  /** Return the value of the url hash (suffolk.edu/best_page#the_url_hash) to
   *    let the element with that id get highlighted.
   * 
   * @params {any} new_val - Give a new value every time if you want to force
   *    this function to recalculate the url hash.
   * 
   * @returns {string} - The url hash
   * */

  // https://18.react.dev/learn/managing-state#preserving-and-resetting-state
  const [ hash, set_hash ] = useState("");

  useEffect(() => {
    set_hash( window.location.hash );
  }, [ new_val ]);

  return hash;
};
