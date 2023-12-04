# WEB2_cetvrti_projekt
Napomene (također u README.md repozitorija): Sve je uspješno riješeno.
U github repozitoriju priložene su sve datoteke, cijeli nginx server i folder testImages nalaze se u repozitoriju jer sam u njemu radio, no nisu nužno potrebni za predaju.
Pisao sam i svojevrsni "dnevnik rada" u datoteci opisKoraka.txt, u njemu je i opis što pojedina datoteka predstavlja.
   
Tražena web-stranica sa svim pripadajućim datotekama priložena je u folderu lab4.
   
nginx.conf je izvučen u root direktorij repozitorija. Konfiguriran je za http2, kad sam htio http/1.1 sam u server objekt pod listen stavio 443 ssl umjesto 443 ssl http2.
   
http2.har i no_http2.har su također u root direktoriju repozitorija, to su skraćene verzije originalnih .har datoteka.
Zbog čitljivosti i olakšavanja pregledavanja i donošenja zaključaka sam u njima ostavio po 1 primjer zahtjeva za: dokument, skriptu, sliku i stylesheet. 
Originalni fileovi su imali puno linija pa sam se odlučio na ovo zbog dijela zadatka : "Logirati samo ono što je dovoljno da se vidi podrška za HTTP/2".
Ukoliko su potrebni ipak kompletni .har zapisi, priložio sam i njih kao datoteke http2_full.har i no_http2_full.har

Slike zaslona http2.jpg i no_http2.jpg su također priložene u root folderu.



