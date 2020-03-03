a = "we holly pass them yup i and myself come a"
p a.split(" ").map{|t| t.length==1? t.upcase : t}.reverse.join(" ")
