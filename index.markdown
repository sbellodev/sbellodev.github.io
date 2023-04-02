---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: portfolio
title: "Santi Bello"
---
  
![profile image]({{ site.baseurl }}/assets/img/perfil.jpg){: .profile-img .text-center #index}

## SANTI BELLO
{: .font-endless .text-right}
## SOFTWARE DEVELOPER 
{: .font-endless .text-right .span}
## AT [NEWTONLAB SPACE][exp6] 
{: .font-endless .text-right .size-medium}

<br/>
<br/>

Hi there, I'm a full-stack developer with over 2 years of experience. My passion lies in <span>creating platforms</span> and being a <span>caretaker</span>, ensuring that everything runs smoothly behind the scenes.  
  
Whether it's over a cup of coffee or just exchanging ideas and stories, I'm looking forward to making <span>meaningful connections</span> with everyone.

<br/> 
<br/>

[![iconTwitter](/assets/img/twitter.svg){:.icon}][rrssTwitter]
[![iconGithub](/assets/img/github.svg){:.icon}][rrssGithub]
[![iconLinkedin](/assets/img/linkedin.svg){:.icon}][rrssLinkedin]
[![iconMail](/assets/img/mail.svg){:.icon}][rrssEmail]
{: .text-center}

<br/>
<br/>

{% for post in site.posts %}
[{{ post.title }}]({{ post.url }})

{{ post.content | reading_time }} - {{ post.date | date: "%D" }}
{: .date}
{% endfor %}

<br/>
<br/>

[main]: #main
[home]: #home
[who]: #who
[blog]: #blog
[experience]: #experience
[where]: #where

[exp6]: https://newtonlabspace.com/
[exp5]: https://www.nunegal.com/web
[exp4]: https://santibello-empresa1.netlify.app/
[exp3]: https://diariomotor.com
[exp2]: https://smashbrosspain.com
[exp1]: https://animalbrowsing.com

[rrssTwitter]: https://twitter.com/sbellodev       
[rrssGithub]: https://github.com/sbellodev/
[rrssLinkedin]: https://www.linkedin.com/in/sbellodev/
[rrssEmail]: mailto:sbellodev@gmail.com"