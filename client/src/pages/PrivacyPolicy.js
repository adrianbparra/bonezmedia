import React from 'react';
import { Container, Header, List, Tab, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './PrivacyPolicy.css';

function PrivacyPolicy() {

    return (
        <Container as={"main"} className='main'>

            <Header
                as="h1" 
                dividing 
                size='huge'
                content="Privacy Notice" 
                subheader="Last updated December 29, 2022"
            />
            
            <Container>
                <p>The privacy notice for Bonez Media ("<span className='bold'>Company</span>", "<strong>we</strong>","<strong>us</strong>","<strong>our</strong>"), describe how and why we might collect, store, and/or share ("<strong>process</strong>") your information when you use our services ("<strong>Services</strong>"), such as when you:</p>
                <List bulleted>
                    <List.Item>Visit our website at <Link to={'..'}>https://bonezmedia.com</Link>, or any website of our that links to this privacy notice</List.Item>
                    <List.Item>Engage with us in other related ways, including any sales, marketing, or events</List.Item>
                </List>
                <p><strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices.
                If you do not agree with our polices and practices, please do not use our Services.
                If you still have any questions or concerns, please contact us at <Link to={'../contactus'}>bonezmedia.com/contactus</Link>.</p>
            </Container>

            <Container>
                <Header
                    content="Summary of Key Points"
                />
                <p><strong>
                    This summary provides key points from our privacy notice, but you can found out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. 
                    You can click <a href='#toc'>here</a> to go directly to our table of contents.
                </strong></p>

                <p><strong>What perosonal information do we process?</strong> We do not process sensitive personal information.</p>
                <p><strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.</p>
                <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communication with you, for security and fraud prevention, and to comply with the law.
                We may also process your information for other purposes with your consent.
                We process your information only when we have a valid legal reason to do so. Click here to learn more.</p>
                <p><strong>In what situations and with which parties do we share personal information? </strong> 
                We may share information in specific situations and with specific third parties.
                Click here to learn more.</p>
                <p><strong>How do we keep your information safe?</strong> We have organizational and technical
                processes and procedures in place to protect your personal information. However, no
                electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
                cybercriminals, or other unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your information. 
                Click here to learn more.
                </p>
                <p><strong>What are your rights?</strong> Depending on where you are located geographically, the
                applicable privacy law may mean you have certain rights regarding your personal
                information. Click here to learn more</p>
                <p><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by
                filling out our data subject request form available <a target='_blank' rel="noopener noreferrer" href='https://app.termly.io/notify/69b6c022-52a7-4d85-a02b-a2139f526849'>here</a>, or by contacting us. We will
                consider and act upon any request in accordance with applicable data protection laws.</p>
                <p>Want to learn more about what Bonez Media does with any information we collect?
                Click <a href='#toc'>here</a> to review the notice in full.</p>
            </Container>

            <Container id='toc'>
                <Header
                    content='Table of Contents'
                />
                <List ordered>
                    <List.Item as="a" href='#infocollect'>
                    WHAT INFORMATION DO WE COLLECT?
                    </List.Item>
                    <List.Item as='a' href='#processinfo'>
                    HOW DO WE PROCESS YOUR INFORMATION?
                    </List.Item>
                    <List.Item as='a' href='#sharepersinfo'>
                    WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                    </List.Item>
                    <List.Item as='a' href='#stance3rdweb'>
                    WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                    </List.Item>
                    <List.Item as='a' href='#cookiestrack'>
                    DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                    </List.Item>
                    <List.Item as='a' href='#sociallogins'>
                    HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                    </List.Item>
                    <List.Item as='a' href='#longinfo'>
                    HOW LONG DO WE KEEP YOUR INFORMATION?
                    </List.Item>
                    <List.Item as='a' href='#infosafe'>
                    HOW DO WE KEEP YOUR INFORMATION SAFE?
                    </List.Item>
                    <List.Item as='a' href='#privacyrights'>
                    WHAT ARE YOUR PRIVACY RIGHTS?
                    </List.Item>
                    <List.Item as='a' href='#donottrack'>
                    CONTROLS FOR DO-NOT-TRACK FEATURES
                    </List.Item>
                    <List.Item as='a' href='#caliprivacyrights'>
                    DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                    </List.Item>
                    <List.Item as='a' href='#updateonnotice'>
                    DO WE MAKE UPDATES TO THIS NOTICE?
                    </List.Item>
                    <List.Item as='a' href='#contactus'>
                    HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                    </List.Item>
                    <List.Item as='a' href='#datacollected'>
                    HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                    </List.Item>
                </List>
            </Container>
            <Container id='infocollect'>
                <Header
                    content='WHAT INFORMATION DO WE COLLECT?'
                    subheader="Personal information you disclose to us"
                />
                <p><strong>In Short</strong>: We collect personal information that you provide to us.</p>
                <p>We collect personal information that you voluntarily provide to us when you express
                an interest in obtaining information about us or our products and Services, when you
                participate in activities on the Services, or otherwise when you contact us.</p>
                <p><strong>Personal Information Provided by You.</strong> The personal information that we collect
                depends on the context of your interactions with us and the Services, the choices you
                make, and the products and features you use. The personal information we collect
                may include the following:</p>
                <List bulleted>
                    <List.Item>names</List.Item>
                    <List.Item>phone numbers</List.Item>
                    <List.Item>email addresses</List.Item>
                    <List.Item>mailing addresses</List.Item>
                    <List.Item>billing addresses</List.Item>
                    <List.Item>debit/credit card numbers</List.Item>
                </List>
                <p><strong>Sensitive Information.</strong> We do not process sensitive information</p>
                <p><strong>Payment Data.</strong> We may collect data necessary to process your payment if you make
                purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is stored by Stripe. You
                may find their privacy notice link(s) here: <a href='https://stripe.com/privacy' target='_blank' rel="noopener noreferrer">https://stripe.com/privacy.</a></p>
                <p><strong>Social Media Login Data.</strong> We may provide you with the option to register with us
                using your existing social media account details, like your Facebook, Twitter, or other
                social media account. If you choose to register in this way, we will collect the
                information described in the section called <a href='#sociallogins'>"HOW DO WE HANDLE YOUR SOCIAL
                LOGINS?"</a> below.
                </p>
                <p>All personal information that you provide to us must be true, complete, and accurate,
                and you must notify us of any changes to such personal information.
                </p>
                <Header subheader='Information automaticaly collected'/>
                <p><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or
                browser and device characteristics — is collected automatically when you visit our
                Services</p>
                <p>We automatically collect certain information when you visit, use, or navigate the
                Services. This information does not reveal your specific identity (like your name or
                contact information) but may include device and usage information, such as your IP
                address, browser and device characteristics, operating system, language
                preferences, referring URLs, device name, country, location, information about how
                and when you use our Services, and other technical information. This information is
                primarily needed to maintain the security and operation of our Services, and for our
                internal analytics and reporting purposes</p>
                <p>Like many businesses, we also collect information through cookies and similar
                technologies.</p>
                <p>The information we collect includes:</p>
                <List bulleted>
                    <List.Item>Log and Usage Data. Log and usage data is service-related, diagnostic,
                    usage, and performance information our servers automatically collect when
                    you access or use our Services and which we record in log files. Depending on
                    how you interact with us, this log data may include your IP address, device
                    information, browser type, and settings and information about your activity in
                    the Services (such as the date/time stamps associated with your usage, pages
                    and files viewed, searches, and other actions you take such as which features
                    you use), device event information (such as system activity, error reports
                    (sometimes called "crash dumps"), and hardware settings).</List.Item>
                </List>
            </Container>
            <Container id='processinfo'>
                <Header
                    content="HOW DO WE PROCESS YOUR INFORMATION?"
                />
                <p><strong>In Short:</strong> We process your information to provide, improve, and administer our
                Services, communicate with you, for security and fraud prevention, and to comply
                with law. We may also process your information for other purposes with your consent</p>
                <p><strong>We process your personal information for a variety of reasons, depending on
                how you interact with our Services, including:
                </strong></p>

                <List bulleted>
                        <List.Item>
                            <strong>To deliver and facilitate delivery of services to the user.</strong>We may process
                            your information to provide you with the requested service.
                        </List.Item>
                        <List.Item>
                            <strong>To fulfill and manage your orders. </strong>We may process your information to fulfill
                            and manage your orders, payments, returns, and exchanges made through the
                            Services.
                        </List.Item>
                        <List.Item>
                            <strong>To deliver targeted advertising to you. </strong>We may process your information to
                            develop and display personalized content and advertising tailored to your
                            interests, location, and more.
                        </List.Item>                        
                        <List.Item>
                            <strong>To protect our Services. </strong>We may process your information as part of our
                            efforts to keep our Services safe and secure, including fraud monitoring and
                            prevention.
                        </List.Item>                        c
                        <List.Item>
                            <strong>To evaluate and improve our Services, products, marketing, and your experience. </strong>We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our
                            promotional campaigns, and to evaluate and improve our Services, products,
                            marketing, and your experience.
                        </List.Item>                        
                        <List.Item>
                            <strong>To comply with our legal obligations. </strong>We may process your information to
                            comply with our legal obligations, respond to legal requests, and exercise,
                            establish, or defend our legal rights.
                        </List.Item>
                </List>

            </Container>
            <Container id='sharepersinfo'>
                <Header
                    content="WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
                />

                <p><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties</p>
                <p>We may need to share your personal information in the following situations:</p>
                <List bulleted>
                    <List.Item>
                        <strong>Business Transfers. </strong>We may share or transfer your information in connection
                        with, or during negotiations of, any merger, sale of company assets, financing,
                        or acquisition of all or a portion of our business to another company.
                    </List.Item>
                </List>
            </Container>
            <Container id='stance3rdweb'>
                <Header
                    content=" WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?"
                />
                <p><strong>In Short: </strong>We are not responsible for the safety of any information that you share with
                third parties that we may link to or who advertise on our Services, but are not
                affiliated with, our Services.
                </p>
                <p>The Services may link to third-party websites, online services, or mobile applications
                and/or contain advertisements from third parties that are not affiliated with us and
                which may link to other websites, services, or applications. Accordingly, we do not
                make any guarantee regarding any such third parties, and we will not be liable for
                any loss or damage caused by the use of such third-party websites, services, or
                applications. The inclusion of a link towards a third-party website, service, or
                application does not imply an endorsement by us. We cannot guarantee the safety
                and privacy of data you provide to any third parties. Any data collected by third
                parties is not covered by this privacy notice. We are not responsible for the content or
                privacy and security practices and policies of any third parties, including other
                websites, services, or applications that may be linked to or from the Services. You
                should review the policies of such third parties and contact them directly to respond
                to your questions.</p>
            </Container>
            <Container id='cookiestrack'>
                <Header
                    content="DO WE USE COOKIES AND OTHER TRACKING
                    TECHNOLOGIES?"
                />
                <p><strong>In Short: </strong>We may use cookies and other tracking technologies to collect and store
                your information.
                </p>
                <p>We may use cookies and similar tracking technologies (like web beacons and pixels)
                to access or store information. Specific information about how we use such
                technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
            </Container>
            <Container id='sociallogins'>
                <Header
                    content="HOW DO WE HANDLE YOUR SOCIAL LOGINS?"
                />
                <p><strong>In Short: </strong>If you choose to register or log in to our Services using a social media
                account, we may have access to certain information about you.
                </p>
                <p>Our Services offer you the ability to register and log in using your third-party social
                media account details (like your Facebook or Twitter logins). Where you choose to do
                this, we will receive certain profile information about you from your social media
                provider. The profile information we receive may vary depending on the social media
                provider concerned, but will often include your name, email address, friends list, and
                profile picture, as well as other information you choose to make public on such a
                social media platform.</p>
                <p>We will use the information we receive only for the purposes that are described in this
                privacy notice or that are otherwise made clear to you on the relevant Services.
                Please note that we do not control, and are not responsible for, other uses of your
                personal information by your third-party social media provider. We recommend that
                you review their privacy notice to understand how they collect, use, and share your
                personal information, and how you can set your privacy preferences on their sites
                and apps.
                </p>
            </Container>
            <Container id='longinfo'>
                <Header
                    content="HOW LONG DO WE KEEP YOUR INFORMATION?"
                />
                <p><strong>In Short: </strong>We keep your information for as long as necessary to fulfill the purposes
                outlined in this privacy notice unless otherwise required by law</p>
                <p>We will only keep your personal information for as long as it is necessary for the
                purposes set out in this privacy notice, unless a longer retention period is required or
                permitted by law (such as tax, accounting, or other legal requirements).</p>
                <p>When we have no ongoing legitimate business need to process your personal
                information, we will either delete or anonymize such information, or, if this is not
                possible (for example, because your personal information has been stored in backup
                archives), then we will securely store your personal information and isolate it from
                any further processing until deletion is possible.
                </p>
            </Container>
            <Container id='infosafe'>
                <Header
                    content="HOW DO WE KEEP YOUR INFORMATION SAFE?"
                />
                <p><strong>In Short: </strong>We aim to protect your personal information through a system of
                organizational and technical security measures.
                </p>
                <p>We have implemented appropriate and reasonable technical and organizational
                security measures designed to protect the security of any personal information we
                process. However, despite our safeguards and efforts to secure your information, no
                electronic transmission over the Internet or information storage technology can be
                guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
                cybercriminals, or other unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your information. Although
                we will do our best to protect your personal information, transmission of personal
                information to and from our Services is at your own risk. You should only access the
                Services within a secure environment.
                </p>
            </Container>
            <Container id='privacyrights'>
                <Header
                    content='WHAT ARE YOUR PRIVACY RIGHTS?'
                />
                <p><strong>In Short: </strong>You may review, change, or terminate your account at any time.</p>
                <p>If you are located in the EEA or UK and you believe we are unlawfully processing
                your personal information, you also have the right to complain to your local data
                protection supervisory authority. You can find their contact details here:
                <a href='https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm' target='_blank' rel="noopener noreferrer"> https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.
                </p>
                <p>If you are located in Switzerland, the contact details for the data protection authorities
                are available here:<a href='https://www.edoeb.admin.ch/edoeb/en/home.html' target='_blank' rel="noopener noreferrer">https://www.edoeb.admin.ch/edoeb/en/home.html</a>.
                </p>
                <p><strong>Withdrawing your consent: </strong>If we are relying on your consent to process your
                personal information, which may be express and/or implied consent depending on
                the applicable law, you have the right to withdraw your consent at any time. You can
                withdraw your consent at any time by contacting us by using the contact details
                provided in the section <a href='#contactus'>HOW CAN YOU CONTACT US ABOUT THIS NOTICE? </a>
                below.
                </p>
                <p>However, please note that this will not affect the lawfulness of the processing before
                its withdrawal nor, when applicable law allows, will it affect the processing of your
                personal information conducted in reliance on lawful processing grounds other than
                consent.
                </p>
                <p><strong>Cookies and similar technologies: </strong>Most Web browsers are set to accept cookies
                by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this
                could affect certain features or services of our Services. To opt out of interest-based
                advertising by advertisers on our Services visit <a href='http://www.aboutads.info/choices/' target='_blank' rel="noopener noreferrer">http://www.aboutads.info/choices/</a>.
                </p>
            </Container>

            <Container id='donottrack'>
                <Header content="CONTROLS FOR DO-NOT-TRACK FEATURES"/>
                <p>Most web browsers and some mobile operating systems and mobile applications
                include a Do-Not-Track ("DNT") feature or setting you can activate to signal your
                privacy preference not to have data about your online browsing activities monitored
                and collected. At this stage no uniform technology standard for recognizing and
                implementing DNT signals has been finalized. As such, we do not currently respond
                to DNT browser signals or any other mechanism that automatically communicates
                your choice not to be tracked online. If a standard for online tracking is adopted that
                we must follow in the future, we will inform you about that practice in a revised
                version of this privacy notice.</p>
            </Container>
            <Container id='caliprivacyrights'>
                <Header content="DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"/>
                <p><strong>In Short: </strong>Yes, if you are a resident of California, you are granted specific rights
                regarding access to your personal information.
                </p>
                <p>California Civil Code Section 1798.83, also known as the "Shine The Light" law,
                permits our users who are California residents to request and obtain from us, once a
                year and free of charge, information about categories of personal information (if any)
                we disclosed to third parties for direct marketing purposes and the names and
                addresses of all third parties with which we shared personal information in the
                immediately preceding calendar year. If you are a California resident and would like
                to make such a request, please submit your request in writing to us using the contact
                information provided below</p>
                <p>If you are under 18 years of age, reside in California, and have a registered account
                with Services, you have the right to request removal of unwanted data that you
                publicly post on the Services. To request removal of such data, please contact us
                using the contact information provided below and include the email address
                associated with your account and a statement that you reside in California. We will
                make sure the data is not publicly displayed on the Services, but please be aware
                that the data may not be completely or comprehensively removed from all our
                systems (e.g., backups, etc.).
                </p>
                <strong>CCPA Privacy Notice</strong>
                <p>The California Code of Regulations defines a "resident" as:</p>
                <List ordered>
                    <List.Item> every individual who is in the State of California for other than a temporary or transitory purpose and</List.Item>
                    <List.Item> every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</List.Item>
                </List>
                <p>All other individuals are defined as "non-residents."</p>
                <p>If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.</p>
                <strong>What categories of personal information do we collect?</strong>
                <p>We have collected the following categories of personal information in the past twelve (12) months:</p>
                <Table celled basic compact>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Category</Table.HeaderCell>
                            <Table.HeaderCell>Examples</Table.HeaderCell>
                            <Table.HeaderCell>Collected</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>A. Identifiers</Table.Cell>
                            <Table.Cell>Contact details, such as real name, alias,
                            postal address, telephone or mobile
                            contact number, unique personal identifier, online identifier, Internet Protocol address,
                            email address, and account name
                            </Table.Cell>
                            <Table.Cell>YES</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>B. Personal information categories listed in the California Customer Records statute</Table.Cell>
                            <Table.Cell>Name, contact information, education, employment, employment history, and financial information</Table.Cell>
                            <Table.Cell>NO</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>C. Protected classification characteristics under California or federal law</Table.Cell>
                            <Table.Cell>Gender and date of birth</Table.Cell>
                            <Table.Cell>NO</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>D. Commercial information</Table.Cell>
                            <Table.Cell>Transaction information, purchase history, financial details, and payment information</Table.Cell>
                            <Table.Cell>NO</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>E. Biometric information </Table.Cell>
                            <Table.Cell>Fingerprints and voiceprints </Table.Cell>
                            <Table.Cell>NO</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>F. Internet or other similar network activity</Table.Cell>
                            <Table.Cell>Browsing history, search history, online
                            behavior, interest data, and interactions
                            with our and other websites, applications,
                            systems, and advertisements</Table.Cell>
                            <Table.Cell>NO</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>G. Geolocation data</Table.Cell>
                            <Table.Cell>Device location</Table.Cell>
                            <Table.Cell>NO</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>H. Audio, electronic, visual, thermal, olfactory, or similar information</Table.Cell>
                            <Table.Cell>Images and audio, video or call recordings
                            created in connection with our business
                            activities</Table.Cell>
                            <Table.Cell>NO</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>I. Professional or employment-related information</Table.Cell>
                            <Table.Cell>Business contact details in order to
                            provide you our Services at a business level or job title, work history, and
                            professional qualifications if you apply for a job with us</Table.Cell>
                            <Table.Cell>NO</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>J. Education Information </Table.Cell>
                            <Table.Cell>Student records and directory information </Table.Cell>
                            <Table.Cell>NO</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>K. Inferences drawn from other personal information</Table.Cell>
                            <Table.Cell>Inferences drawn from any of the collected
                            personal information listed above to create
                            a profile or summary about, for example,
                            an individual’s preferences and
                            characteristics</Table.Cell>
                            <Table.Cell>NO</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <p>We may also collect other personal information outside of these categories through
                instances where you interact with us in person, online, or by phone or mail in the
                context of:</p>
                <List bulleted>
                    <List.Item>Receiving help through our customer support channels;</List.Item>
                    <List.Item>Participation in customer surveys or contests; and</List.Item>
                    <List.Item>Facilitation in the delivery of our Services and to respond to your inquiries.</List.Item>
                </List>
                <strong>How do we use and share your personal information?</strong>
                <p>More information about our data collection and sharing practices can be found in this privacy notice.</p>
                <p>You may contact us by email at help@bonezmedia.com, by visiting <Link to={'../contactus'}>bonezmedia.com/contactus</Link>, or by referring to the contact details at the bottom of this document.</p>
                <p>If you are using an authorized agent to exercise your right to opt out we may deny a
                request if the authorized agent does not submit proof that they have been validly
                authorized to act on your behalf</p>
                <strong>Will your information be shared with anyone else?</strong>
                <p>We may disclose your personal information with our service providers pursuant to a
                written contract between us and each service provider. Each service provider is a forprofit entity that processes the information on our behalf.</p>
                <p>We may use your personal information for our own business purposes, such as for
                undertaking internal research for technological development and demonstration. This
                is not considered to be "selling" of your personal information.</p>
                <p>Bonez Media has not disclosed or sold any personal information to third parties for a
                business or commercial purpose in the preceding twelve (12) months. Bonez
                Media will not sell personal information in the future belonging to website visitors,
                users, and other consumers.</p>
                <strong>Your rights with respect to your personal data</strong>
                <p>Right to request deletion of the data — Request to delete</p>
                <p>You can ask for the deletion of your personal information. If you ask us to delete your
                personal information, we will respect your request and delete your personal
                information, subject to certain exceptions provided by law, such as (but not limited to)
                the exercise by another consumer of his or her right to free speech, our compliance
                requirements resulting from a legal obligation, or any processing that may be
                required to protect against illegal activities</p>
                <p>Right to be informed — Request to know</p>
                <p>Depending on the circumstances, you have a right to know:</p>
                <List bulleted>
                    <List.Item>whether we collect and use your personal information;</List.Item>
                    <List.Item>the categories of personal information that we collect;</List.Item>
                    <List.Item>the purposes for which the collected personal information is used;</List.Item>
                    <List.Item>whether we sell your personal information to third parties;</List.Item>
                    <List.Item>the categories of personal information that we sold or disclosed for a business purpose;</List.Item>
                    <List.Item>the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and</List.Item>
                    <List.Item>the business or commercial purpose for collecting or selling personal information.</List.Item>
                </List>
                <p>In accordance with applicable law, we are not obligated to provide or delete
                consumer information that is de-identified in response to a consumer request or to reidentify individual data to verify a consumer request.</p>
                <p>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</p>
                <p>We will not discriminate against you if you exercise your privacy rights</p>
                <p>Verification process</p>
                <p>Upon receiving your request, we will need to verify your identity to determine you are
                the same person about whom we have the information in our system. These
                verification efforts require us to ask you to provide information so that we can match it
                with information you have previously provided us. For instance, depending on the
                type of request you submit, we may ask you to provide certain information so that we
                can match the information you provide with the information we already have on file,
                or we may contact you through a communication method (e.g., phone or email) that
                you have previously provided to us. We may also use other verification methods as
                the circumstances dictate.</p>
                <p>We will only use personal information provided in your request to verify your identity
                or authority to make the request. To the extent possible, we will avoid requesting
                additional information from you for the purposes of verification. However, if we cannot
                verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and
                for security or fraud-prevention purposes. We will delete such additionally provided
                information as soon as we finish verifying you.</p>
                <p>Other privacy rights</p>
                <List  bulleted>
                    <List.Item>You may object to the processing of your personal information.</List.Item>
                    <List.Item>You may request correction of your personal data if it is incorrect or no longer
                    relevant, or ask to restrict the processing of the information.</List.Item>
                    <List.Item>You can designate an authorized agent to make a request under the CCPA on
                    your behalf. We may deny a request from an authorized agent that does not
                    submit proof that they have been validly authorized to act on your behalf in
                    accordance with the CCPA</List.Item>
                    <List.Item>You may request to opt out from future selling of your personal information to
                    third parties. Upon receiving an opt-out request, we will act upon the request
                    as soon as feasibly possible, but no later than fifteen (15) days from the date
                    of the request submission.</List.Item>
                </List>
                <p>To exercise these rights, you can contact us by email at help@bonezmedia.com, by
                visiting <Link to={'../contactus'}>bonezmedia.com/contactus</Link>, or by referring to the contact details at the bottom
                of this document. If you have a complaint about how we handle your data, we would
                like to hear from you.</p>
            </Container>
            <Container id='updateonnotice'>
                <Header content="DO WE MAKE UPDATES TO THIS NOTICE?"/>
                <p><strong>In Short: </strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
                <p>We may update this privacy notice from time to time. The updated version will be
                indicated by an updated "Revised" date and the updated version will be effective as
                soon as it is accessible. If we make material changes to this privacy notice, we may
                notify you either by prominently posting a notice of such changes or by directly
                sending you a notification. We encourage you to review this privacy notice frequently
                to be informed of how we are protecting your information.</p>
            </Container>
            <Container id='contactus'>
                <Header content="HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"/>
                <p>If you have questions or comments about this notice, you may contact us at <Link to={'../contactus'}>bonezmedia.com/contactus</Link></p>
            </Container>
            <Container id='datacollected'>
                <Header content="HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"/>
                <p>Based on the applicable laws of your country, you may have the right to request
                access to the personal information we collect from you, change that information, or
                delete it. To request to review, update, or delete your personal information, please
                submit a request form by clicking <a href='https://app.termly.io/notify/69b6c022-52a7-4d85-a02b-a2139f526849' target='_blank' rel="noopener noreferrer">here</a>.
                </p>
                <p>This privacy policy was created using Termly's Privacy Policy Generator</p>
            </Container>
        </Container>
    );
}

export default PrivacyPolicy;