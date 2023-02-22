---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: portfolio
title: "Santi Bello"
---
  
![profile image]({{ site.baseurl }}/assets/img/perfil.jpg){: .profile-img .text-center #index}

## SANTI BELLO
{: .font-endless .text-right}
## PHP MYSQL
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
  
## [WHO][main]

Hello, I'm Santi Bello, a software developer specialized in <span>PHP</span> (CodeIgniter) and JavaScript and currently work remotely from Galicia, Spain.
<br/>  
<center>< \ ></center>  
<br/>
With my extensive experience as a Full Stack developer, I enjoy optimizing <span>backend</span> software architecture to ensure high performance and scalability.
<br/>  
<center>< \ ></center>  
<br/>
I am always seeking new opportunities to work on challenging projects and collaborate with like-minded professionals. Please don't hesitate to contact me via the [information][where] provided. Let's connect and explore new possibilities.
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
  
## [EXPERIENCE][main]

**Software Developer** at [Nunegal][exp1]   
{:.exp-title}
Sep 2021 - 1 year 5 months... 👩‍💻 
<br>
PHP _ CodeIgniter _ SQL _ JavaScript
{:.exp-tech}
<br>

**Freelance Web Developer** at [Empresa Privada][exp2] 
{:.exp-title}
Dec 2020 - 2 months
<br>
React _ JavaScript _ CSS
{:.exp-tech}
<br>

**Frontend Developer** at [Diariomotor][exp3]  
{:.exp-title}
Nov 2019 - 3 months
<br>
React _ JavaScript _ CSS
{:.exp-tech}
<br>
  
**Software Developer** at [SmashBrosSpain][exp4]  
{:.exp-title}
May 2019 - 7 months
<br>
PHP _ Codeigniter _ SQL _ Javascript 
{:.exp-tech}
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

## [WHERE][main]

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

[rrssTwitter]: https://twitter.com/sbellodev       
[rrssGithub]: https://github.com/sbellodev/
[rrssLinkedin]: https://www.linkedin.com/in/sbellodev/
[rrssEmail]: mailto:sbellodev@gmail.com"
