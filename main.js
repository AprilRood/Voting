var myElectionApp = angular.module('ElectionApp',[])

myElectionApp.controller("MainController", function($scope){
	$scope.candidates=[];
	$scope.addCandidate = function(){
		$scope.newCandidate.votes = 0;
		$scope.candidates.push($scope.newCandidate);
		$scope.newCandidate = {};
	};
	$scope.addVote = function(votedFor){
		// for (candidate in $scope.candidates)
		// 	{if (candidate.name = name)
		// 		{
				var getVotes = votedFor.votes;
				// $scope.candidate.votes = getVotes + 1;
				votedFor.votes = getVotes + 1;
				
			
		
		// $scope.candidates.push($scope.addCandidate);
		// addCandidate=[];
	}
});

function Candidate(name){

}