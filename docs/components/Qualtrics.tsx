import { Fragment, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Script from 'next/script';

export type QualtricsScriptProps = { zone: string; zoneID: string };

export const Qualtrics = ({ zone, zoneID }: QualtricsScriptProps) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	const target = <div id={zoneID} aria-hidden="true" />;
	return (
		<Fragment>
			<Script id="qualtrics-init">
				{`(function(){var g=function(g){
      this.go=function(){var a=document.createElement("script");a.type="text/javascript";a.src=g;document.body&&document.body.appendChild(a)};
      this.start=function(){var t=this;"complete"!==document.readyState?window.addEventListener?window.addEventListener("load",function(){t.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){t.go()}):t.go()};};
      try{(new g("https://${zone}.siteintercept.qualtrics.com/SIE/?Q_ZID=${zoneID}")).start()}catch(i){}})();`}
			</Script>
			{createPortal(target, document.body)}
		</Fragment>
	);
};
