hubSlider.js
=======
**hubSlider.js**, javascript ve css3 ile çalışan, kullanımı kolay ve özelleştirilebilir slider kütüphanesidir. 

Çalışan halini [http://academy.hublabs.com.tr/hubslider](http://academy.hublabs.com.tr/hubslider) adresinde görebilirsiniz.

Codepen [http://codepen.io/anon/pen/eZLMjd] (Codepen Hublabs!)

Download http://hublabs.github.io/hubSlider

```shell
bower install hubslider
```

Kullanım
--------
```js
$('.hub-slider-slides ul').hubSlider({
    selector: $('li'),
    button: {
        next: $('.hub-slider-arrow_next'),
        prev: $('.hub-slider-arrow_prev')
    }
});
```

`Not: jQuery eklemeden eklentinin çalışmayacağını unutmamak gerekir (:`

## Parametre

`selector` Elementi seçmek için kullanılır.

`button.next` Yukarı kaydırma işlemi için kullanılacak nesneyi gösterir.

`button.prev` Aşağı kaydırma işlemi için kullanılacak nesneyi gösterir.

`auto` Elementlerin otomatik olarak tekrarlaması için **true** olarak gönderilmesi gerekir.

`time` Otomatik dönecek olan elemenlerin **saniye** bazında bekleme zamanını gösterir.

`opacity` İlk elementin transparan'lık ayarını gösterir.

`opacityStep` İlk elementten sonraki elemenlerde aşama aşama azalıcak opaklık seviyesini gösterir.

`offset` İlk elementin üstten **margin** değerini gösterir.

`startOffset` İlk elementten sonraki elemenlerde aşama aşama üstten **margin** seviyesini gösterir.

`transition` Buttonlar aktif edildiğinde slider geçişlerinde animasyon efektini gösterir.


♥ Built with Love
=======
[![Hublabs Yazılım Ofisi](http://www.hublabs.com.tr/images/logo-white.png?v=13223423)](http://www.hublabs.com.tr)
