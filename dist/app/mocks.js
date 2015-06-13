angular.module('capapp.clarity.mock', [
  'ngMockE2E'
])

// Stub backend
.run(function($httpBackend) {
	var timesheets = [
		{
			periodId: 20,
			startDate: "07-07-2014",
			endDate: "07-13-2014",
			status:"Open",
			weekdays : [
			 {MOND: "Ma 7/7", MonHours: ""},
			 {TUES: "Di 8/7", TueHours: ""},
			 {WEDS: "Wo 9/7", WedHours: ""},
			 {THUR:"Do 10/7", ThrHours: ""},
			 {FRID:"Vr 11/7", FriHours: ""},
			 {SATR:"Za 12/7", SatHours: ""},
			 {SUND:"Zo 13/7", SunHours: ""}
			],
			projects : [
				"Lisa",
				"Windows BB",
				"Dialog"
			],
			projectsData : [{
				projectdesc: "Lisa",
				projectcode: "P_code",
				projectstasks:[{taskdesc: "Task 1",
								taskcode: "Task code 1",
								totalhours: 0,
								weekdays : [
											 {MOND: "Ma 7/7", MonHours: 0},
											 {TUES: "Di 8/7", TueHours: 0},
											 {WEDS: "Wo 9/7", WedHours: 0},
											 {THUR:"Do 10/7", ThrHours: 0},
											 {FRID:"Vr 11/7", FriHours: 0},
											 {SATR:"Za 12/7", SatHours: 0},
											 {SUND:"Zo 13/7", SunHours: 0}
											]
						},{taskdesc: "Task 2",
								taskcode: "Task code 2",
								totalhours: 0,
								weekdays : [
											 {MOND: "Ma 7/7", MonHours: 0},
											 {TUES: "Di 8/7", TueHours: 0},
											 {WEDS: "Wo 9/7", WedHours: 0},
											 {THUR:"Do 10/7", ThrHours: 0},
											 {FRID:"Vr 11/7", FriHours: 0},
											 {SATR:"Za 12/7", SatHours: 0},
											 {SUND:"Zo 13/7", SunHours: 0}
											]
						}]
				
			},{
				projectdesc: "Kijkglas",
				projectcode: "KP_code",
				projectstasks:[{taskdesc: "Task 3",
								taskcode: "Task code 3",
								totalhours: 0,
								weekdays : [
											 {MOND: "Ma 7/7", MonHours: 0},
											 {TUES: "Di 8/7", TueHours: 0},
											 {WEDS: "Wo 9/7", WedHours: 0},
											 {THUR:"Do 10/7", ThrHours: 0},
											 {FRID:"Vr 11/7", FriHours: 0},
											 {SATR:"Za 12/7", SatHours: 0},
											 {SUND:"Zo 13/7", SunHours: 0}
											]
						},{taskdesc: "Task 4",
								taskcode: "Task code 4",
								totalhours: 0,
								weekdays : [
											 {MOND: "Ma 7/7", MonHours: 0},
											 {TUES: "Di 8/7", TueHours: 0},
											 {WEDS: "Wo 9/7", WedHours: 0},
											 {THUR:"Do 10/7", ThrHours: 0},
											 {FRID:"Vr 11/7", FriHours: 0},
											 {SATR:"Za 12/7", SatHours: 0},
											 {SUND:"Zo 13/7", SunHours: 0}
											]
						}]
				
			}]
		}, 
		{
			periodId: 21,
			startDate: "07-14-2014",
			endDate: "07-20-2014",
			status:"Open",
			weekdays : [
			 {MOND: "Ma 7/7", MonHours: "12"},
			 {TUES: "Di 8/7", TueHours: "12"},
			 {WEDS: "Wo 9/7", WedHours: ""},
			 {THUR:"Do 10/7", ThrHours: ""}
			],
			projects : [
				"Lisa",
				"Windows BB",
				"Dialog"
			],
			projectsData : [{
				projectdesc: "Lisa",
				projectcode: "P_code",
				projectstasks:[{taskdesc: "Task 1",
								taskcode: "Task code 1",
								totalhours: 0,
								weekdays : [
											 {MOND: "Ma 7/7", MonHours: 0},
											 {TUES: "Di 8/7", TueHours: 0},
											 {WEDS: "Wo 9/7", WedHours: 0},
											 {THUR:"Do 10/7", ThrHours: 0},
											 {FRID:"Vr 11/7", FriHours: 0},
											 {SATR:"Za 12/7", SatHours: 0},
											 {SUND:"Zo 13/7", SunHours: 0}
											]
						},{taskdesc: "Task 2",
								taskcode: "Task code 2",
								totalhours: 0,
								weekdays : [
											 {MOND: "Ma 7/7", MonHours: 0},
											 {TUES: "Di 8/7", TueHours: 0},
											 {WEDS: "Wo 9/7", WedHours: 0},
											 {THUR:"Do 10/7", ThrHours: 0},
											 {FRID:"Vr 11/7", FriHours: 0},
											 {SATR:"Za 12/7", SatHours: 0},
											 {SUND:"Zo 13/7", SunHours: 0}
											]
						}]
				
			},{
				projectdesc: "MCP Plugin",
				projectcode: "MCP_code",
				projectstasks:[{taskdesc: "Task 5",
								taskcode: "Task code 5",
								totalhours: 0,
								weekdays : [
											 {MOND: "Ma 7/7", MonHours: 0},
											 {TUES: "Di 8/7", TueHours: 0},
											 {WEDS: "Wo 9/7", WedHours: 0},
											 {THUR:"Do 10/7", ThrHours: 0},
											 {FRID:"Vr 11/7", FriHours: 0},
											 {SATR:"Za 12/7", SatHours: 0},
											 {SUND:"Zo 13/7", SunHours: 0}
											]
						},{taskdesc: "Task 6",
								taskcode: "Task code 6",
								totalhours: 0,
								weekdays : [
											 {MOND: "Ma 7/7", MonHours: 0},
											 {TUES: "Di 8/7", TueHours: 0},
											 {WEDS: "Wo 9/7", WedHours: 0},
											 {THUR:"Do 10/7", ThrHours: 0},
											 {FRID:"Vr 11/7", FriHours: 0},
											 {SATR:"Za 12/7", SatHours: 0},
											 {SUND:"Zo 13/7", SunHours: 0}
											]
						}]
				
			}]
		}, 
		{
			periodId: 22,
			startDate: "07-21-2014",
			endDate: "07-27-2014",
			status:"Open",
			weekdays : [
			 {MOND: "Ma 7/7", MonHours: "12"},
			 {TUES: "Di 8/7", TueHours: "12"},
			 {WEDS: "Wo 9/7", WedHours: ""},
			 {THUR:"Do 10/7", ThrHours: ""}
			],
			projects : [
				"Lisa",
				"Windows BB",
				"Dialog"
			],
			
			projectsData : [{
				projectdesc: "Bert",
				projectcode: "Br_code",
				projectstasks:[{taskdesc: "Task 7",
								taskcode: "Task_code_7",
								totalhours: 29,
								weekdays : [
											 {MOND: "Ma 7/7", MonHours: 12},
											 {TUES: "Di 8/7", TueHours: 10},
											 {WEDS: "Wo 9/7", WedHours: 12},
											 {THUR:"Do 10/7", ThrHours: 12},
											 {FRID:"Vr 11/7", FriHours: 12},
											 {SATR:"Za 12/7", SatHours: 12},
											 {SUND:"Zo 13/7", SunHours: 12}
											]
						},{taskdesc: "Task 8",
								taskcode: "Task_code_8",
								totalhours: 79,
								weekdays : [
											 {MOND: "Ma 7/7", MonHours: 1},
											 {TUES: "Di 8/7", TueHours: 2},
											 {WEDS: "Wo 9/7", WedHours: 0},
											 {THUR:"Do 10/7", ThrHours: 0},
											 {FRID:"Vr 11/7", FriHours: 0},
											 {SATR:"Za 12/7", SatHours: 0},
											 {SUND:"Zo 13/7", SunHours: 0}
											]
						}]
				
			}]
		}
	];

	// returns the current list of phones
	$httpBackend.whenGET(/\/clarity\/timesheets/).respond(timesheets);
	$httpBackend.whenGET(/views/).passThrough();

});