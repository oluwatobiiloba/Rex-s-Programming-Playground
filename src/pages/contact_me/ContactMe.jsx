import React from 'react';
import './contact_me.css'

export function ContactMe() {
	return (
		<div className="pagenav">
			<h1 className="contacthead">
				Hi! Feel free to contact me with the form below 🙂.
			</h1>

			<div className="form">
				<form>
					<h2>
						<label htmlFor="name">Your Name</label>
					</h2>
					<input type="text" name="name" className="textarea" />

					<h2>
						<label htmlFor="email">Email</label>
					</h2>
					<input type="email" name="email" className="textarea" />

					<h2>
						<label htmlFor="message">Your Enquiry</label>
					</h2>
					<textarea rows="10" cols="20" name="message" className="textarea"></textarea>

					<h2>
						<label htmlFor="priority">How urgent is your request?</label>
					</h2>
					<select id="priority" name="priority" className="textarea formlabels">
						<option value=""></option>
						<option value="High">Really urgent</option>
						<option value="Medium">Within 48 Hours</option>
						<option value="Low">Take your time</option>
					</select>

					<button className="submit" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
