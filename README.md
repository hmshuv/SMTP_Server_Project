# SMTP Server

This repository contains a simple SMTP (Simple Mail Transfer Protocol) server implementation written in JavaScript. SMTP is a protocol used for sending email messages between servers. This server can be used for testing and learning purposes.

## Features:

- Lightweight SMTP server implementation.
- Supports basic SMTP commands such as HELO, EHLO, MAIL FROM, RCPT TO, DATA, and QUIT.
- Accepts incoming email messages and prints them to the console.

## Usage:

1. **Clone the repository:**

`git clone https://github.com/hmshuv/SMTP_Server_Project.git`

2. **Navigate to the project directory:**

`cd SMTP_Server_Project`

3. **Run the SMTP server:**

`node app.js`


4. By default, the server listens on port 25. You can change the port by modifying the `PORT` variable in the `app.js` file.

## Configuration:

- Modify the `PORT` variable in the `app.js` file to change the port on which the server listens.
- Advanced configuration options such as enabling logging or implementing additional SMTP commands can be added as needed.

## DNS Records:

To properly configure email delivery, ensure the following DNS records are set up for your domain:

- **MX (Mail Exchange) Record:** Points to the domain's mail server(s) responsible for receiving email.
- **SPF (Sender Policy Framework) Record:** Specifies which IP addresses are allowed to send email on behalf of the domain.
- **DKIM (DomainKeys Identified Mail) Record:** Provides a way to validate the authenticity of email messages.
- **DMARC (Domain-based Message Authentication, Reporting, and Conformance) Record:** Specifies email authentication and reporting policies.

## Contributing:

Contributions to this project are welcome. Feel free to fork the repository, make changes, and submit pull requests.

## License:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer:

This SMTP server implementation is intended for educational and testing purposes only. It may not be suitable for production environments and should be used with caution.

## Contact:

For any inquiries or issues regarding this project, feel free to contact [maintainer_name](mailto:maintainer@example.com).

Thank you for using the SMTP Server repository!