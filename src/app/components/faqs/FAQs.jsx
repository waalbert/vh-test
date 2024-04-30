import React from "react";
import faq_data from "./FAQs.json";
import { Accordion } from "react-bootstrap";
import SingleFAQ from "./SingleFAQ";
import "./FAQs.scss";

export default class FAQs extends React.Component {
	render() {
		var leftFAQs = faq_data.filter(function (faq, index) {
			return index % 2 === 0;
		});

		var rightFAQs = faq_data.filter(function (faq, index) {
			return index % 2 !== 0;
		});

		return (
			<div id="faq-accordion-wrapper">
				{/* Two accordions, one faq on each side can be open at a time */}
				<div id="faq-accordion-grid">
					<Accordion>
						{leftFAQs.map((faq, i) => (
							<SingleFAQ key={i} data={faq} index={i} />
						))}
					</Accordion>
					<Accordion>
						{rightFAQs.map((faq, i) => (
							<SingleFAQ key={i} data={faq} index={i} />
						))}
					</Accordion>
				</div>

				{/* One accordion, one faq can be open at a time */}
				<div id="faq-accordion-mobile">
					<div id="faq-accordion-wrapper">
						<Accordion>
							{faq_data.map((faq, i) => (
								<SingleFAQ key={i} data={faq} index={i} />
							))}
						</Accordion>
					</div>
				</div>
			</div>
		);
	}
}
