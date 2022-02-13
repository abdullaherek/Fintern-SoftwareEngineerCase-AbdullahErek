# Fibabanka Fintern Software Engineer (Frontend) Case - Abdullah Erek

Projeyi zip olarak indirip editörde açın veya git clone ile projeyi localinize ekleyin.


Install and run on android

```bash
cd Fintern-SoftwareEngineerCase-AbdullahErek
npm install
react-native run-android
```

Install and run on ios

```bash
cd Fintern-SoftwareEngineerCase-AbdullahErek
npm install
react-native run-ios
```

Kurulumdan sonra refresh atmayı unutmayalım :)

Projede Gereksinimleri:
```bash
Herhangi bir dilde bir mobil uygulama geliştirin. 
(Android Native, iOS Native, React-Native, Flutter)

```

Senaryo:
[1-)](#api-islemleri) Bir API aracalığıyla veriler üzerinde işlemler yapılmalıdır.

[2-)](#acilis-sayfasi) Uygulama ilk başladığında ana sayfaya yönlendirecektir.

[3-)](#kaydirilabilir-gonderi-listesi) Kaydırılabilir 10 adet gönderi burada yer alacaktır.

[4-)](#gonderi-bicimi) Her gönderinin bir yazarı ve içeriği olmalıdır.

[5-)](#sayfa-yenileme) Sayfa en üstten çekildiğinde yenileme işlemi yapılacaktır.

[6-)](#siralama) Sayfa aşağı kaydırıldığında daha eski gönderiler yüklenecektir.

[7-)](#gonderi-detayi) Her gönderinin kendine ait tekil bir sayfası olacaktır.

[8-)](#gonderi-detayi) Ana sayfada yer alan gönderilerde 100 karakter sınırlaması
varken, detay görünümünde içeriğin tamamı gelmelidir.

[9-)](#geri-donus-islemi) Detay sayfasından ana sayfaya geri dönülmelidir ve daha önce
kaydırma yapılan pozisyona geri dönülmelidir.

### Api İslemleri
Uygulamada bir film datası barındıran The MovieDB API kullanılmıştır. (https://www.themoviedb.org/documentation/api?language=tr)
API key ile en popüler filmler data olarak alınmıştır.

### Acilis Sayfasi
Uygulamanın açılış sayfası "HomePage" olarak belirlenmiştir.


![Capture](https://user-images.githubusercontent.com/64756914/153733762-97e8a7a2-74de-4a4d-8975-daee6b15c472.PNG)


### Kaydirilabilir Gonderi Listesi
Uygulama ilk çalıştığında API üzerinden gelen veriler home ekranında kaydırılabilir olarak listelenmektedir.
Alttaki görselde sağda kaydırma çubuğu görülmektedir.


![Capture](https://user-images.githubusercontent.com/64756914/153733796-011b3767-1d65-4664-9122-0aa74c36c0cf.PNG)


### Gonderi Bicimi
Ana ekranda her gönderinin başlığı, 100 karakterden oluşan kısa özeti, çıkış tarihi ve IMDB puanı yer almaktadır.
Üstteki görsellerde gönderi biçimi görülmektedir.

### Sayfa Yenileme
Uygulamada yer alırken en üstten çekildiğinde sayfa tekrar yüklenmektedir. Sayfa tekrar yüklenirken veriler
API üzerinden tekrar çekilmektedir. Alltaki görselde yenileme ikonu görülmektedir.


![Capture](https://user-images.githubusercontent.com/64756914/153733811-50a42626-a69f-4884-9b43-ad14d33b7a80.PNG)


### Siralama
Uygulama içerisindeki gönderiler filmlerin çıkış tarihine göre sıralanmaktadır. En yeni film en üstte, çıkış tarihi
en eski olan film en altta sıralanmaktadır.
Üstteki görsellerde ve gönderi biçiminde tarihe göre bir sıralama olduğu gösterilmiştir. Bunun için sort ve reverse
fonskiyonları kullanılmıştır.

### Gonderi Detayi
Her gönderinin bir detay sayfası bulunmaktadır. Başlık üzerine tıklandığında o filmin açıklamasının tamamı, başlığı, çıkış tarihi
ve posteri detay sayfasında yer almaktadır. Alttaki görsel detay sayfasına aittir.


![Capture](https://user-images.githubusercontent.com/64756914/153733855-30319a9a-0d32-4f3b-8768-1008209ed813.PNG)


### Geri Donus Islemi
Detay sayfasından geri dönüş işlemi yapıldığında ana sayfaya geri dönülür ve en son kaydırma işlemi nerede kaldıysa aynı yere gelinmiş olur.
Kısaca, geri dönüş işlemlerinde sayfa yeniden yüklenmez ve en üstten başlamaz.




