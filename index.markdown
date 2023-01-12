---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: portfolio
title: "Santi Bello"
---
  
![profile image]({{ site.baseurl }}/assets/img/perfil.jpg){: .profile-img .text-center #index}

## SANTI BELLO
{: .font-endless .text-right}
## JAVA - PHP - REACT
{: .font-endless .span .text-right}
## SOFTWARE DEVELOPER
{: .font-endless .text-right}

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
  
## [BLOG][main]

{% for post in site.posts %}
[{{ post.title }}]({{ post.url }})

{{ post.content | reading_time }} - {{ post.date | date: "%D" }}
{: .date}
{% endfor %}

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
  
## [WHO][home]

Nice to meet you. I'm Santi Bello.  
I'm a developer from Galicia, Spain, currently working remote as a Software Developer in <span>Java<span>, <span>PHP</span> and JavaScript, having worked with <span>React</span>.
<br/>  
<center>< \ ></center>  
<br/>
I like working both Front and Backend, studying and applying good practices and metodologies.  
<br/>  
<center>< \ ></center>  
<br/>
As as hobby, aside of staying up-to-date with tecnologies I arrange social gaming events since 2014, having performed more than 140 events within our organisation. Don't hesitate to [contact][where] me!
  
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
  
## [EXPERIENCE][home]

**Software Developer** at [Nunegal][exp1]   
Dec 2021 - 1 year 1 month... 👩‍💻 
* Developing internal software and tools.
* CD/CI Testing and deployment.
* Mentoring interns and assigning tasks.
* PHP, Java, JavaScript, Xamarin, C#.

**Software Developer** at [Nunegal][exp1]  
Oct 2021 - 3 months
* Full-Cycle App Development from scratch.
* Planning of requirements and interface.
* Implementating front, backend and database.
* Spring Boot, Java, React, Javascript.

**Frontend Developer** at [Empresa Privada][exp2]  
Jan 2021 - 2 months
* Freelanced a website from scratch alone
* Customer and engineer/design communication.
* Deadlines, prototypes and feedback.
* React, JavaScript.

**Frontend Developer** at [Diariomotor][exp3]  
Nov 2019 - 3 months
* Developed in a high traffic web.
* Tuned up good practices and refactoring.
* Coded detailed web layout.
* React, JavaScript.
  
<br/>
  
## [VOLUNTEERING AND PROJECTS][home]
**Software Developer** at [SmashBrosSpain][exp4]  
Jun 2019 - 2 years
* Volunteering FullStack.
* Implemented features as 'notification panel'.
* CSS Layout from a given design.
* PHP, Javascript, Codeigniter.
  
**Software Developer** at [Animal Browsing][exp5]  
Mar 2020 - 4 months
* Designed and created from scratch alone.
* Managed data from JSONs.
* Clean Code. APIs, Design, UX, SEO.
* React, Node.js.
  
[More projects][projects]  
  
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
  
## [WHERE][home]

[![iconTwitter](/assets/img/twitter.svg){:.icon}][rrssTwitter]
[![iconGithub](/assets/img/github.svg){:.icon}][rrssGithub]
[![iconLinkedin](/assets/img/linkedin.svg){:.icon}][rrssLinkedin]
[![iconMail](/assets/img/mail.svg){:.icon}][rrssEmail]

[main]: #main
[home]: #home
[who]: #who
[blog]: #blog
[experience]: #experience
[where]: #where

[exp1]: https://www.nunegal.com/web
[exp2]: https://santibello-empresa1.netlify.app/
[exp3]: https://diariomotor.com
[exp4]: https://smashbrosspain.com
[exp5]: https://animalbrowsing.com
[projects]: https://github.com/sbellodev?tab=repositories

[rrssTwitter]: https://twitter.com/sbellodev       
[rrssGithub]: https://github.com/sbellodev/
[rrssLinkedin]: https://www.linkedin.com/in/sbellodev/
[rrssEmail]: mailto:sbellodev@gmail.com"
