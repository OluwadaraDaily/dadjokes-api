'use strict'
const Twilio = require('Twilio')
const Env = use('Env')
const Mail = use('Mail')
// const mailjet = require ('node-mailjet')

class DadJokeController {
	async sendJokesEmail({ request, response }) {
		const body = await request.all()

		// Send Email
		const mailData = {
				name: body['name'],
				message: body['message'],
				joke: body['joke']['joke']
			}

			//Send Mail 
			await Mail.send('dadjoke.email', mailData , message => {
				message.to(body['email'])
				.from('oluwadara.oloye@stu.cu.edu.ng')
				.subject("RANDOM JOKE")
			})
		
		return response.json({
			name: body['name'],
			email: body['email'],
			message: body['message'],
			joke: body['joke']['joke']
		})
	}
}

module.exports = DadJokeController
