#!/usr/local/bin/perl
# palindrome.cgi COMP519

print "Content-type: text/html \n\n";
print "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\"
    \"http://www.w3.org/TR/xhtml11/DTD/xhtml1-strict.dtd\">
<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\"> \n";
print "<link rel=\"stylesheet\" href=\"http://cgi.csc.liv.ac.uk/~u3dcda/css/main.css\" />";
print "<head>\n<title>Palindrome checker</title>\n</head> \n\n";
print "<body>\n";
print "<div class=\"container text-center\">";

# Storing each textinput value into an array
# If it is not empty, execute the subroutines
@queryArray = split( /&/ ,$ENV{QUERY_STRING});
foreach $i(@queryArray){
	($input, $value) = split(/\=/ , $i);
	if(defined($value) && $value ne "") {
		if(&isPalindrome(&prepareInput($value)) eq "true"){
			print "<p class=\"text-success\">PALINDROME!<br>";
			$value =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
			$value =~ s/\+/ /g;
			print "<strong>$value</strong> is a palindrome</p><br>";
		}else{
			print "<p class=\"text-warning\">NOT A PALINDROME!<br>";
			$value =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
			$value =~ s/\+/ /g;
			print "<strong>$value</strong> is not a palindrome</p><br>";
		}
	}
}

# Subroutine to prepare input for comparison
sub prepareInput{
	$userinputs = lc $_[0];
	$userinputs =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
	$userinputs =~ s/[[:punct:]]//g;
	$userinputs;
}

# Subroutine to compare one input with its reversal form
sub isPalindrome{
	$reverse = reverse $_[0];
	if($_[0] eq $reverse) {
		return "true";
	}else{	return "false";  }
}

print "<a href=\"javascript:history.go(-1)\" class=\"btn btn-primary\" type=\"submit\">Analyse more itens!</a>";
print "</div>";


print "</body>\n</html> \n";

