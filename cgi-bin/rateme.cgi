#!/usr/local/bin/perl
# rateme.cgi COMP519

print "Content-type: text/html \n\n";
print "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\"
    \"http://www.w3.org/TR/xhtml11/DTD/xhtml1-strict.dtd\">
<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\"> \n";
print "<link rel=\"stylesheet\" href=\"http://cgi.csc.liv.ac.uk/~u3dcda/css/main.css\" />";
print "<head>\n<title>Rate me</title>\n</head> \n\n";
print "<body> \n";
print "<div class=\"container text-center\">";


$userinput = $ENV{QUERY_STRING};
$userinput =~ s/rate//g;
$userinput =~ s/=//g;
$visitor = $ENV{REMOTE_ADDR};


$file = "rating.txt";
$toBeUpdated ="";
$fileString = "";
@fileStringArray = ();
@temporaryArray = ();



if(&checkIP ne "already voted"){
		&addVote;
		&storeVote;
}

close(RATEREAD);

&showResult;


# CHECK IP in each vote
sub checkIP{
	open(RATEREAD, $file);
	$fileString =<RATEREAD>;
	@fileStringArray = split(/\//,$fileString);
	foreach (@fileStringArray){
		@tempArray2 = split(/;/,$_);
		if(length($tempArray2[2]) > 5 ){

			if(index($tempArray2[2], $visitor) != -1){
				print "<h2>Your vote has already been registered, thank you!</h2>";
				close(RATEREAD);
				return "already voted";
			}
		}
	}
	close(RATEREAD);
	return "didnt vote";
}
# Use the string to make ADD one more vote (deals with the string)
sub addVote{
	for(my $j=0; $j < @fileStringArray; $j++) {
		@tempArray = split(/;/,$fileStringArray[$j]);

		if($tempArray[0] eq $userinput){
				$tempArray[1] += 1;
				if($tempArray[2] eq ""){$tempArray[2] = "$visitor";}else{$tempArray[2] .= ";$visitor";}
				$toBeUpdated =  join(';', @tempArray);
			}

	}
	for(my $i=0; $i < @fileStringArray; $i++) {
		@temporaryArray = split(/;/,$fileStringArray[$i]);
		if($temporaryArray[0] eq $userinput){
			$fileStringArray[$i] = $toBeUpdated;
		}
	}
}

# Subroutine to save the string into the file
sub storeVote{
	open(RATEWRITE, ">rating.txt");
	$insertUpdated = join('/', @fileStringArray);
	print RATEWRITE $insertUpdated;
	close(RATEWRITE);
}

# Subroutine to output result
sub showResult{
	open(R, "rating.txt");
	$result =<R>;
	print "<h3>Rating result</h3>";
	print "<table class=\"table table-bordered table-striped table-condensed\"><tr><th>Very good</th><th>Good</th><th>So-so</th><th>Bad</th><th>Very bad</th></tr><tr>";
	@resultArray = split(/\//,$result);
	for(my $i=0; $i < @resultArray; $i++) {
		@tempResult = split(/;/,$resultArray[$i]);
		print "<td>$tempResult[1] </td>";
	}
	print "</tr></table>";
	close(R);
}



print "<a href=\"http://cgi.csc.liv.ac.uk/~u3dcda/rateme.html\" class=\"btn btn-primary\" type=\"submit\">Go back to the Rate Page!</a>";
print "</div>";

print "</body>\n</html> \n";

